import networkx as nx

# 构建有向图
G = nx.DiGraph()
for edge in edges:
    G.add_edge(edge["source"], edge["target"], weight=edge["weight"])

# 计算从虚拟人到所有用户的最短路径
paths = nx.single_source_shortest_path(G, source="初音未来")

# 导出路径数据
with open("paths.csv", "w") as f:
    f.write("Source,Target,PathLength\n")
    for target, path in paths.items():
        if "User" in target:
            f.write(f"初音未来,{target},{len(path)-1}\n")