# -*- coding:utf-8-*-
from http.cookiejar import Cookie

import requests
import threading
import time, math, re
import execjs, json
from time import sleep


def first_reply(url, headers, wts, oid):
    # js逆向部分 start
    p1 = 'mode=3&oid=oid_str&pagination_str={"offset":""}&plat=1&seek_rpid=&type=1&web_location=1315875&wts=number'.replace(
        'number', str(wts)).replace('oid_str', str(oid))
    w_rid = execjs.compile(open('./a.js', 'r', encoding='utf-8').read()).call('result', p1)
    # end
    data = {
        'oid': oid,
        'type': '1',
        'mode': '3',
        'pagination_str': '{"offset":""}',
        'plat': '1',
        'seek_rpid': '',
        'web_location': '1315875',
        'w_rid': str(w_rid),
        'wts': str(wts)
    }
    response = requests.get(url=url, params=data, headers=headers)
    try:
        if re.search('next_offset.*?type.*?direction.*?session_id.*?\d+', response.text):
            return json.loads(response.text)
        else:
            return None
    except Exception as e:
        print(f"Error：{e}")
        return None


def next_reply(url, headers, wts, oid, session_id):
    # js逆向部分 start
    # {\\"type\\":1,\\"direction\\":1,\\"session_id\\":\\"1781687358730070\\",\\"data\\":{}}
    offset_str = '{"offset":"{\\"type\\":1,\\"direction\\":1,\\"session_id\\":\\"session_id_str\\",\\"data\\":{}}"}'.replace(
        'session_id_str', str(session_id))
    p1 = 'mode=3&oid=oid_str&pagination_str=offset_str&plat=1&type=1&web_location=1315875&wts=number'
    p2 = p1.replace('oid_str', str(oid)).replace('offset_str', offset_str).replace('number',
                                                                                   str(wts))  # 1781687358730070 1781703578201797
    w_rid = execjs.compile(open('./a.js', 'r', encoding='utf-8').read()).call('result', p2)
    # end
    data = {
        'oid': oid,
        'type': '1',
        'mode': '3',
        'pagination_str': offset_str,
        'plat': '1',
        'web_location': '1315875',
        'w_rid': str(w_rid),
        'wts': str(wts)
    }
    response = requests.get(url=url, params=data, headers=headers)
    try:
        if re.search('next_offset.*?type.*?direction.*?session_id.*?\d+', response.text):
            return json.loads(response.text)
        else:
            return None
    except Exception as e:
        print(f"Error：{e}")
        return None


con_que = []
session_id = None
flag_live1 = False  # 第一个工人线程是否存活
flag_live2 = False


def all_reply(oid=113430975484244):
    global con_que, session_id, flag_live1, flag_live2
    url = 'https://api.bilibili.com/x/v2/reply/wbi/main?'
    # 使用字典存储 cookies
    cookies_dict = {
        'CURRENT_FNVAL':'4048', 'DedeUserID': '1680947039', 'DedeUserID__ckMd5': 'a89f6d9854d3b0ef', 'SESSDATA': '00def807%2C1757139580%2C359cb%2A31CjAHD6OVLZbEGNIoPpIs6yQqxcPZt9o9EiBiBw8SvX-da1N62bgn9_fmR4vLbbUeGZkSVnp6a3A2QUhyei1zV3RveWZ6QUJyQnlvQ0s1eVJhX1dWeEhhUTRFUktjM1pfQTdoNGhFQnFNR3otVVVrd3AwNGhta3lacS1hdlFsT1dFVmhUT0JTWW13IIEC', '_uuid': 'F494176B-4BAA-3C7E-CA106-D3F42AB7D104334527infoc', 'b_lsid': '2E4BB71A_1957F6E52AB', 'b_nut': '1741315635', 'bili_jct': 'c508dd174fe226a33393ceb5958bc6ac', 'bili_ticket': 'eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDE4NDY4NjcsImlhdCI6MTc0MTU4NzYwNywicGx0IjotMX0.jc6Sqm9WMZWp35TZLvWZ0n0l8YflWfiioQumClVl_QM', 'bili_ticket_expires': '1741846807', 'bp_t_offset_1680947039': '1042600038338920448', 'browser_resolution': '1280-632', 'bsource': 'search_google', 'buvid3': '88553B27-21A1-4B27-B41E-6044F75A46B635594infoc', 'buvid4': 'E5F65E35-17C2-99A0-E1FA-080AC085BC8A36757-025030702-3JQGB9ULTfTEsiyJD1eePg%3D%3D', 'buvid_fp': '7cf561d786278a9a58846544904315d1', 'buvid_fp_plain': 'undefined', 'enable_feed_channel': 'DISABLE', 'enable_web_push': 'DISABLE', 'fingerprint': '7cf561d786278a9a58846544904315d1', 'header_theme_version': 'CLOSE', 'home_feed_column': '4', 'rpdid': "|(u|kk~YlmkY0J'u~RuJuYR|~", 'sid': '6b068yqu'
}


    # 将字典转换为字符串
    cookies = '; '.join([f"{key}={value}" for key, value in cookies_dict.items()])

    headers = {
        'accept': '*/*',
        'accept-encoding': 'utf-8',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://t.bilibili.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        "cookie": cookies,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    }

    wts = math.floor(time.time())
    if content := first_reply(url, headers, wts, oid):
        session_id = content['data']['cursor']['session_id']
        con_que.append(
            content
        )  # ['data']['cursor']['session_id']
    else:
        flag_live1 = False
        return

    while flag_live2:
        wts = math.floor(time.time())
        if content := next_reply(url, headers, wts, oid, session_id):
            con_que.append(
                content
            )
        else:
            break

    flag_live1 = False


def down_reply():
    global con_que, flag_live1, flag_live2
    all_comments = []  # 用于存储所有评论数据
    while flag_live1 or con_que:
        if con_que:
            dict_data = con_que.pop(0)
            if not dict_data['data']['replies']:
                flag_live2 = False
                break
            for data in dict_data['data']['replies']:
                mid = data['member']['mid']
                uname = data['member']['uname']
                sex = data['member']['sex']
                sign = data['member']['sign']
                like = data['like']
                rcount=data['rcount']
                message = data['content']['message']
                # up_like = data['reply_control']['up_like']
                time_desc = data['reply_control']['time_desc']
                # 构建评论字典
                comment = {
                    'mid': mid,
                    'uname': uname,
                    'sex': sex,
                    'sign': sign,
                    'like':like,
                    'rcount':rcount,
                    'message': message,
                    'time_desc': time_desc,
                                    }
                all_comments.append(comment)

                print(f"{mid}  {uname}  {sex}  {sign} {like} {rcount} {message} {time_desc} ")
                print(message)
                print()
        else:
            sleep(3)
    flag_live2 = False
 # 保存所有评论数据到文件
    save_comments_to_file(all_comments)

def save_comments_to_file(comments, filename='commentsFromLYX.json'):
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(comments, f, ensure_ascii=False, indent=4)
        print(f"Comments saved to {filename}")
    except Exception as e:
        print(f"Error saving comments to file: {e}")

def main(oid):
    global flag_live1, flag_live2
    flag_live1 = True
    flag_live2 = True
    request_thread = threading.Thread(target=all_reply, args=(oid,))
    down_thread = threading.Thread(target=down_reply)
    request_thread.start()
    down_thread.start()
    request_thread.join()
    down_thread.join()


if __name__ == '__main__':
    main(872904213)