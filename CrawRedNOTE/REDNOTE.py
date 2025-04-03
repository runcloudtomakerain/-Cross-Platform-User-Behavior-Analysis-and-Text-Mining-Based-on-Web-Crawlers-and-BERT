#导入模块
import time
from DrissionPage import  WebPage
#导入鼠标动作
from DrissionPage.common import Actions

#开启浏览器
#1.初始化一个浏览器
wp=WebPage()
ac=Actions(wp)
#2.打开搜索词“葡萄酒”链接
wp.get('https://www.xiaohongshu.com/search_result?keyword=%25E8%2591%25A1%25E8%2590%2584%25E9%2585%2592&source=web_explore_feed')
#元素定位并点击
wp.ele('xpath://div[@class="search-icon"]').click()
#3.监听笔记
wp.listen.start(['/web/v1/search/notes','/api/sns/web/v1/feed'])
#4.获取内容
info=[]
for page in range(5):
    packet=wp.listen.wait()
    sections=wp.eles('xpath://a[@class="cover ld mask"]')
    for i in range(0 ,len(sections) ):
        temp=sections[i]
        if temp.attr('href') not in info:
            info.append(temp.attr('href'))
            temp.click()
            packet = wp.listen.wait()
            print(packet.response.body)
            wp.ele('xpath://div[@class="close   close-mask-dark"]').click()
            time.sleep(1)
    #定位后调用drissonpage库里边的actions方法控制页面滚动，元素定位滚动不行
    ac.scroll(delta_y=1500)

    # 构建要访问的URL地址列表
    # def get_url_list(self):
    #     '''
    #     url_list = list()
    #     for i in range(1000):
    #         url_list.append(self.url_temp.format(i*50))
    #     return url_list
    #     '''
    #     # 使用列表推导式代码更加简洁
    #     return [self.url_temp.format(i * 50) for i in range(1000)]
    # def login():
    #     # 1 实例化一个session对象
    #     session = requests.session()
    #
    #     # 2 第一次post请求，要传入登陆账号和密码
    #     post_url = "http://www.renren.com/PLogin.do"
    #     form_data = {'email': '908851835@qq.com', 'password': 'zfb123456zfb'}
    #     headers = {
    #         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3730.400 QQBrowser/10.5.3805.400"}
    #     # 使用上面的实例session发送post请求，传入上面的参数
    #     session.post(url=post_url, headers=headers, data=form_data)
    #     # 上面发送一次请求以后，session实例就已经有了cookie
    #
    #     # 3 直接登录主页，login()要在该函数之前执行一次,直接使用get请求
    #     # 如果直接requests.get请求个人主页，由于没有cookie，会自动跳转到登陆页面
    #     home_page_url = "http://www.renren.com/574862780/profile"
    #     response = session.get(url=home_page_url, headers=headers)
    #
    #     # 输出结果就有个人信息
    #     print(response.status_code)
    #     print(response.content.decode())
    #
    #
    # if __name__ == "__main__":
    #     login()

# 使用session发送一次请求，获取cookie
# def login():
#     # 1 实例化一个session对象
#     session = requests.session()
#
#     # 2 第一次post请求，要传入登陆账号和密码
#     post_url = "http://www.renren.com/PLogin.do"
#     form_data = {'email': '908851835@qq.com', 'password': 'zfb123456zfb'}
#     headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3730.400 QQBrowser/10.5.3805.400"}
#     # 使用上面的实例session发送post请求，传入上面的参数
#     response = session.post(url=post_url, headers=headers, data=form_data)
#
#     print(response.cookies)
#     print("*" * 100)
#
#     # 将cookies转换为字典
#     dict = requests.utils.dict_from_cookiejar(response.cookies)
#     print(dict)
#     print("*" * 100)


# 加入重试模块功能,该函数循环执行3次，然后继续执行之后代码
# 该模块实际就是执行了下面try函数的异常捕获功能，只有错误时候才会执行三次，如果请求成功就只有一次


