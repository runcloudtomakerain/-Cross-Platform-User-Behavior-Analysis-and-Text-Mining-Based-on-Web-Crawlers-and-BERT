import cv2
import mediapipe as mp
import math

# 初始化MediaPipe面部检测模型
mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh(
    static_image_mode=True,
    max_num_faces=1,
    refine_landmarks=True,
    min_detection_confidence=0.5
)

# 读取图像
image_path = r"C:\EspeciallyForVF\fourkindsofVF\lyx2.jpeg"


image = cv2.imread(image_path)
if image is None:
    raise FileNotFoundError(f"无法加载图像：{image_path}")

# 转换颜色空间
rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
h, w = image.shape[:2]  # 获取图像尺寸

# 检测关键点
results = face_mesh.process(rgb_image)
if results.multi_face_landmarks:
    landmarks = results.multi_face_landmarks[0].landmark


    # 转换关键点坐标为像素坐标
    def landmark_to_px(lmk):
        return int(lmk.x * w), int(lmk.y * h)


    # 下颌关键点索引（根据MediaPipe面部网格定义）
    jaw_left = landmark_to_px(landmarks[234])  # 左下颌角
    jaw_right = landmark_to_px(landmarks[454])  # 右下颌角
    menton = landmark_to_px(landmarks[152])  # 颏下点

    # === 计算测量值 ===
    # 水平宽度（两点间欧氏距离）
    jaw_width = math.hypot(jaw_right[0] - jaw_left[0], jaw_right[1] - jaw_left[1])

    # 垂直高度（下颌角连线中点到颏下点）
    jaw_mid = ((jaw_left[0] + jaw_right[0]) // 2, (jaw_left[1] + jaw_right[1]) // 2)
    vertical_height = abs(jaw_mid[1] - menton[1])

    # 计算比例
    ratio = jaw_width / vertical_height if vertical_height != 0 else 0

    # === 可视化标注 ===
    # 设置绘图参数
    line_color = (0, 255, 0)  # 绿色
    text_color = (0, 200, 255)  # 橙色
    point_color = (0, 0, 255)  # 红色
    font = cv2.FONT_HERSHEY_SIMPLEX

    # 绘制下颌角连线
    cv2.line(image, jaw_left, jaw_right, line_color, 2)

    # 绘制垂直高度线
    cv2.line(image, jaw_mid, menton, (255, 0, 0), 2)

    # 标记关键点
    cv2.circle(image, jaw_left, 5, point_color, -1)
    cv2.circle(image, jaw_right, 5, point_color, -1)
    cv2.circle(image, menton, 5, point_color, -1)

    # 添加文字标注
    cv2.putText(image, f"Jaw Width: {jaw_width:.1f}px",
                (jaw_left[0] + 10, jaw_left[1] - 20), font, 0.4, text_color, 2)
    cv2.putText(image, f"Vertical Height: {vertical_height:.1f}px",
                (menton[0] - 150, menton[1] + 30), font, 0.4, (255, 0, 0), 2)
    cv2.putText(image, f"Width/Height Ratio: {ratio:.2f}",
                (w // 2 - 150, 50), font, 0.6, text_color, 2)

    # 显示比例说明
    cv2.putText(image, "Jaw Angle Measurement", (10, 30),
                font, 0.8, (255, 255, 255), 2)

    # 显示结果
    cv2.imshow("Facial Landmark Analysis", image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()



else:
    print("未检测到面部")