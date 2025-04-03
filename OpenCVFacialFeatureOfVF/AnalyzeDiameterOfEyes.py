import cv2
import numpy as np


def detect_pupils(image_path):
    # 加载图像并检查是否成功
    image = cv2.imread(image_path)
    if image is None:
        print("错误：无法加载图像，请检查文件路径")
        return

    # 转换为灰度图并降噪
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray = cv2.medianBlur(gray, 5)
    gray = cv2.equalizeHist(gray)

    # 使用精确的眼部检测参数
    eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')
    if eye_cascade.empty():
        print("错误：无法加载级联分类器")
        return

    # 调整检测参数以提高检测率
    eyes = eye_cascade.detectMultiScale(
        gray,
        scaleFactor=1.01,
        minNeighbors=10,
        minSize=(20, 20),
        maxSize=(200, 200)
    )

    # 检查是否检测到眼睛
    if len(eyes) == 0:
        print("未检测到眼睛区域")
        cv2.imshow("Result", image)
        cv2.waitKey(0)
        return

    print(f"检测到 {len(eyes)} 个眼睛区域")

    for (ex, ey, ew, eh) in eyes:
        # 提取眼部ROI区域
        eye_roi = gray[ey:ey + eh, ex:ex + ew]

        # 优化阈值处理：使用自适应阈值
        threshold = cv2.adaptiveThreshold(
            eye_roi,
            255,
            cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
            cv2.THRESH_BINARY_INV,
            15,
            2
        )

        # 形态学操作增强瞳孔区域
        kernel = np.ones((3, 3), np.uint8)
        threshold = cv2.morphologyEx(threshold, cv2.MORPH_CLOSE, kernel)

        # 调整霍夫圆检测参数
        circles = cv2.HoughCircles(
            threshold,
            cv2.HOUGH_GRADIENT,
            dp=1.3,
            minDist=30,
            param1=50,
            param2=16,
            minRadius=5,
            maxRadius=min(ew, eh) // 4
        )

        if circles is not None:
            circles = np.uint16(np.around(circles))
            for i in circles[0, :]:
                # 计算实际位置
                center = (ex + i[0], ey + i[1])
                radius = i[2]

                # 绘制检测结果
                cv2.circle(image, center, radius, (0, 255, 0), 2)
                cv2.circle(image, center, 2, (0, 0, 255), 3)

                # 输出测量结果
                diameter = 2 * radius
                print(f"检测到瞳孔 - 位置：{center}, 直径：{diameter} 像素")

    # 显示检测结果
    cv2.imshow("Pupil Detection Result", image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


# 使用示例
detect_pupils(r"C:\EspeciallyForVF\fourkindsofVF\xc1.png")