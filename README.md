# Datejs 简易版时间格式化

## 安装

```
yarn add @xuanmo/datejs
or
npm i @xuanmo/datejs
```

## 使用

```js
import datejs from '@xuanmo/datejs'

// 默认当前时间，格式：yyyy-MM-dd HH:mm:ss
datejs().format()

// 可传入一个时间作为被转换时间
datejs(new Date('2019-10-10 19:00:00')).format()

// 完整示例
datejs(new Date('2019-11-17 09:00:00')).format('yyyy-MM-dd hh:mm:ss CW')
```

## 可格式化规则

规则|描述|是否补零|结果示例
:-:|:-:|:-:|:-:
yyyy|年||2019
MM|月||09
M|月|Y|9
dd|日||01
d|日|Y|1
HH|时，24小时制||23
H|时，24小时制|Y|23
hh|时，12小时制||01
h|时，12小时制|Y|1
mm|分||01
m|分||1
ss|秒||01
s|秒|Y|01
W|周||1
CW|周||星期一
