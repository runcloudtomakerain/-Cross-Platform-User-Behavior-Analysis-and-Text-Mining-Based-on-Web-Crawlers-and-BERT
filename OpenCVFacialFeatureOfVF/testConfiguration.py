import cv2

# 指定图像路径
image_path = r"C:\Users\HP\OneDrive\桌面\JCY商务信息\酒类饮品信息\待处理\yq0z85cw6uhz.jpg"

# 读取图像
img = cv2.imread(image_path)

# 检查图像是否成功读取
if img is None:
    print(f"无法读取图像文件: {image_path}")
else:
    # 显示图像
    cv2.imshow("Image", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()