import execjs
import requests
import time


headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://www.goofish.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.goofish.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}
# 13位的时间戳
time1 = str(round(time.time() * 1000))
cookies = {
    "cna": "VQt0IIf1xC8BASABD5DastOX",
    "xlly_s": "1",
    "cookie2": "11112da5b0979638881a771a7966ee85",
    "_samesite_flag_": "true",
    "t": "b71eeea8bfd6adff33dbf1ecce15781c",
    "_tb_token_": "753e41415eb77",
    "sgcookie": "E100mOf7PBFS0%2BtS2LVhK2K8Dojff3SL%2B7TI5GQkxzxuKUiMcw%2FRzYhwm1sl75aFoa0SEWQDtPMmSI4XX81f8iH%2BfuFkGVoXwhn8J7a5laFytZq39moANwZhu7UgnCaIPNZu",
    "tracknick": "xy833853734842",
    "csg": "b304782f",
    "unb": "2214036737283",
    "mtop_partitioned_detect": "1",
    "_m_h5_tk": "d53baa09ee99e847e411e73638155a65_1743685306650",
    "_m_h5_tk_enc": "55dbb5e7462290a87632cac7038456cc",
    "tfstk": "g-KtB64dwXciEvSojcg3mfOHGakH6npwSCJ7msfglBdpFLPGlhjMMrdM3Ibj_Gxv9KO-QtcwmR8eZLZMjVS0DGSVcbcoq02wQiSbTyC025zChtocCo11bMaWsdn-q0vwCRXsEpikjC3xh1ffcN_fRk1FHo6XGNiQR6WVh56bfvpCT6Z_lZ_sAW6RESa6GiMpd6WfcOM6llCYC_rvPY8WB5V0FHKMvOQONp3UcoEV97fvCJr4cHLd6_il9oZXvOp3XQpa2qfWz1blNBi3XipCHBQkWbE9MK9ylwKY1AAWOEdfLelYk_LXIU-h8-a6pnCOPh_L3YjCXtOfkel8qOIMJaK97xPBCQf9PGJ0efvdyeQPdwwY5GYkEn7WfcFPtaWv9aYtwld545tk2mm0Z_B05vHLur71Lbhl3F-SGROfp_DeTrzVJ9WdZvHLur71L9CoLBz4uwBF."
}

params = {
    "jsv": "2.7.2",
    "appKey": "34839810",
    "t": "1743678117022",
    # "sign": "7ba2b979d6ec9e38e1cd0495ebfb13ff",
    "v": "1.0",
    "type": "originaljson",
    "accountSite": "xianyu",
    "dataType": "json",
    "timeout": "20000",
    "api": "mtop.taobao.idlemtopsearch.pc.search",
    "sessionOption": "AutoLoginOnly",
    "spm_cnt": "a21ybx.search.0.0",
    "spm_pre": "a21ybx.home.categories.624.4c053da6Q9J2up",
    "log_id": "4c053da6Q9J2up"
}
data = {
    'data': '{"itemId":"","pageSize":30,"pageNumber":2,"machId":""}',
}

# 加载 JavaScript 文件
with open('./EncodeMathod.js', 'r', encoding='utf-8') as file:
    js_code = file.read()

# 编译 JavaScript 代码
context = execjs.compile(js_code)

# 调用 JavaScript 函数
result = context.call('mainstart', data["data"], time1)
print(result)
params['sign'] = result

# requests  post请求
response = requests.post(
    url="https://h5api.m.goofish.com/h5/mtop.taobao.idlemtopsearch.pc.search/1.0/",
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
).json()

print(response)