import json
import jieba
import re
from collections import defaultdict
import networkx as nx

# ----------------------
# 配置参数
# ----------------------
VIRTUAL_HUMANS = {
    "柳叶熙": r"柳",      # 包含“柳”即匹配
    "初音未来": r"初音未来"  # 全名匹配（正则表达式）
}  # 目标虚拟人列表
GENDER_KEYWORDS = {
    "女性标签": ["保护", "养", "温柔", "可爱", "萌妹", "依赖","女神","女孩","耐看","好看","外貌","建模","皮肤","优雅","美女","素颜","美颜","编制"],
    "男性标签": ["技术", "专业", "硬汉", "决策", "领导","定制",""]
}
# ----------------------
# 初始化有向图
# ----------------------
G = nx.DiGraph()
# ----------------------
# 强制创建虚拟人节点（无论是否有用户提及）
for v_name in VIRTUAL_HUMANS:
    G.add_node(v_name, type="Virtual")
    print(f"初始化虚拟人节点: {v_name}")
# 数据加载与预处理
# ----------------------
with open("commentsFromCYWLAndLYX.json", "r", encoding="utf-8") as f:
    comments = json.load(f)
# ----------------------
# 快速分类函数（规则代替BERT）
# ----------------------
def quick_classify(text):
    text_clean = re.sub(r'\[.*?\]', '', text)  # 去除表情
    words = jieba.lcut(text_clean)

    # 优先检测显性标签
    for word in words:
        for tag, keys in GENDER_KEYWORDS.items():
            if word in keys:
                return tag
    return None

# ----------------------
# 构建网络时添加标签→虚拟人的边（基于共现频率）
# ----------------------
def detect_virtual_name(text):
    """
    检测评论中提到的虚拟人名称
    :param text: 评论文本
    :return: 匹配的虚拟人名称列表
    """
    detected = []
    for name, pattern in VIRTUAL_HUMANS.items():
        if re.search(pattern, text, re.IGNORECASE):  # 不区分大小写
            detected.append(name)
    return detected

tag_cooccur = defaultdict(lambda: defaultdict(int))  # 标签与虚拟人共现统计

for comment in comments:
    user_id = f"User_{comment['mid']}"
    message = comment["message"]
    sex = comment.get("sex", "unknown")

    # 添加用户节点
    G.add_node(user_id, type="User", sex=sex)

    # 检测虚拟人（支持部分匹配）
    v_names = detect_virtual_name(message)
    for v_name in v_names:
        # 创建虚拟人节点（若不存在）
        if not G.has_node(v_name):
            G.add_node(v_name, type="Virtual")
        # 添加双向边
        G.add_edge(user_id, v_name, weight=1)
        G.add_edge(v_name, user_id, weight=1)
        print(f"用户 {user_id} 提及虚拟人: {v_name}（规则: {VIRTUAL_HUMANS[v_name]}）")


    # 2. 用户→虚拟人边
    for v_name in VIRTUAL_HUMANS:
        if v_name in message:
            G.add_edge(user_id, v_name, weight=1)
            G.add_edge(v_name, user_id, weight=1)
            print(f"添加边: {user_id} ↔ {v_name}")

        # 3. 用户→标签边
        tag = quick_classify(message)
        if tag:
            tag_id = f"Tag_{tag}"
            G.add_node(tag_id, type="Tag")
            G.add_edge(user_id, tag_id, weight=1)
            # 记录标签与虚拟人共现
            for v_name in v_names:
                tag_cooccur[v_name][tag] += 1

# 添加标签→虚拟人边（基于共现频率）
for v_name, tags in tag_cooccur.items():
    total = sum(tags.values())
    for tag, count in tags.items():
        tag_id = f"Tag_{tag}"
        jaccard = count / total
        G.add_edge(tag_id, v_name, weight=round(jaccard, 2))

    # 统计标签与虚拟人的共现关系
tag_cooccur = defaultdict(lambda: defaultdict(int))

for comment in comments:
    user_id = f"User_{comment['mid']}"
    message = comment["message"]

    # 用户→标签边
    tag = quick_classify(message)
    if tag:
        tag_id = f"Tag_{tag}"
        G.add_node(tag_id, type="Tag")
        G.add_edge(user_id, tag_id, weight=1)

        # 若用户同时提及虚拟人和标签，记录共现
        for v_name in VIRTUAL_HUMANS:
            if v_name in message:
                tag_cooccur[v_name][tag] += 1

# 添加标签→虚拟人边（基于共现频率）
for v_name, tags in tag_cooccur.items():
    total = sum(tags.values())
    for tag, count in tags.items():
        tag_id = f"Tag_{tag}"
        jaccard = count / total  # 共现强度
        G.add_edge(tag_id, v_name, weight=round(jaccard, 2))  # 标签→虚拟人
        G.add_edge(v_name, tag_id, weight=round(jaccard, 2))  # 虚拟人→标签

# ----------------------
# 导出CSV（直接从图对象G提取数据）
# ----------------------
# 节点表（包含类型和性别属性）
with open("nodes.csv", "w", encoding="utf-8") as f:
    f.write("Id,Type,Sex\n")
    for node in G.nodes(data=True):
        node_id = node[0]
        node_type = node[1].get("type", "")
        node_sex = node[1].get("sex", "")
        f.write(f"{node_id},{node_type},{node_sex}\n")

# 边表（包含权重）
with open("edges.csv", "w", encoding="utf-8") as f:
    f.write("Source,Target,Weight\n")
    for edge in G.edges(data=True):
        f.write(f"{edge[0]},{edge[1]},{edge[2].get('weight', 1)}\n")


# ----------------------
# 导出路径数据（修正逻辑）
# ----------------------
with open("paths.csv", "w", encoding="utf-8") as f:
    f.write("Source,Target,PathLength\n")
    for v_name in VIRTUAL_HUMANS:
        if G.has_node(v_name):
            paths = nx.single_source_shortest_path(G, source=v_name)
            valid_paths = [(t, p) for t, p in paths.items() if "User" in t and len(p) > 1]
            print(f"虚拟人 {v_name} 的有效路径数量:", len(valid_paths))
            for target, path in valid_paths:
                f.write(f"{v_name},{target},{len(path)-1}\n")
        else:
            print(f"错误：虚拟人 '{v_name}' 未存在于图中！")