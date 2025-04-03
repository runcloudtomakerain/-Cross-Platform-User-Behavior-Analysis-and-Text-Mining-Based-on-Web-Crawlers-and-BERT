import cv2
import os

def check_haarcascade():
    cascade_path = cv2.data.haarcascades + 'haarcascade_eye.xml'
    if not os.path.exists(cascade_path):
        print(f"haarcascade_eye.xml 文件不存在: {cascade_path}")
    else:
        print(f"haarcascade_eye.xml 文件存在: {cascade_path}")

check_haarcascade()
