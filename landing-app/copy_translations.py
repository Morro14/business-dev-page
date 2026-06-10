# from "./src/i18n/locales/en/translations.json" import tr
import json

target_trs = {}
trs_general = json.load(open("./tr_general_ru.json"))
trs_demo = json.load(open("./src/i18n/locales/ru/demo-lease-app.json"))

for key in trs_demo:
    trs_demo[key] = trs_general.get(key, "")
print(trs_demo)
with open("./src/i18n/locales/ru/demo-lease-app.json", "w") as f:
    json.dump(trs_demo, f, ensure_ascii=False)
