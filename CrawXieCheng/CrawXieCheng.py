from DrissionPage import ChromiumPage
from Tools.scripts.summarize_stats import TOTAL

dp = ChromiumPage()

dp.listen.start('json/hotelStaticInfo')
dp.get('https://hotels.ctrip.com/hotels/62699343.html#ctm_ref=hp_htl_pt_pro_01')
resp = dp.listen.wait()
json_data = resp.response.body
Messages=json_data['Response']
SumNumberOfRooms=Messages['hotelInfo']['basic']['label']
Details=Messages['hotelFacility']
for index in Details:
    print(f"Index type: {type(index)}, content: {index}")
    if isinstance(index, dict):
        dict = {
            '热门设施': index.get('content', {}).get('facilityDesc', ''),
            '交通服务': index.get('content', {}).get('facilityDesc', ''),
            '娱乐活动设施': index.get('content', {}).get('facilityDesc', ''),
            '康体设施': index.get('content', {}).get('facilityDesc', ''),
            '前台服务 ': index.get('parentTitle', '')
        }
        print(dict)
    else:
        print("Unexpected data structure")


