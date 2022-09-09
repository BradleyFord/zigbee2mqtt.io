"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88093],{6670:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-754be685",path:"/devices/QT06.html",title:"GiEX QT06 control via MQTT",lang:"en-US",frontmatter:{title:"GiEX QT06 control via MQTT",description:"Integrate your GiEX QT06 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-07-01T08:15:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"State (binary)",slug:"state-binary",children:[]},{level:3,title:"Mode (enum)",slug:"mode-enum",children:[]},{level:3,title:"Irrigation_target (numeric)",slug:"irrigation-target-numeric",children:[]},{level:3,title:"Cycle_irrigation_num_times (numeric)",slug:"cycle-irrigation-num-times-numeric",children:[]},{level:3,title:"Cycle_irrigation_interval (numeric)",slug:"cycle-irrigation-interval-numeric",children:[]},{level:3,title:"Irrigation_start_time (numeric)",slug:"irrigation-start-time-numeric",children:[]},{level:3,title:"Irrigation_end_time (numeric)",slug:"irrigation-end-time-numeric",children:[]},{level:3,title:"Last_irrigation_duration (numeric)",slug:"last-irrigation-duration-numeric",children:[]},{level:3,title:"Water_consumed (numeric)",slug:"water-consumed-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/QT06.md",git:{updatedTime:1662708202e3}}},20986:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="giex-qt06" tabindex="-1"><a class="header-anchor" href="#giex-qt06" aria-hidden="true">#</a> GiEX QT06</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>QT06</td></tr><tr><td>Vendor</td><td>GiEX</td></tr><tr><td>Description</td><td>Water irrigation valve</td></tr><tr><td>Exposes</td><td>battery, state, mode, irrigation_target, cycle_irrigation_num_times, cycle_irrigation_interval, irrigation_start_time, irrigation_end_time, last_irrigation_duration, water_consumed, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/QT06.jpg" alt="GiEX QT06"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary" aria-hidden="true">#</a> State (binary)</h3><p>State. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum" aria-hidden="true">#</a> Mode (enum)</h3><p>Irrigation mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>duration</code>, <code>capacity</code>.</p><h3 id="irrigation-target-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-target-numeric" aria-hidden="true">#</a> Irrigation_target (numeric)</h3><p>Irrigation Target, duration in minutes or capacity in Litres (depending on mode). Value can be found in the published state on the <code>irrigation_target</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;irrigation_target&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1440</code>. The unit of this value is <code>minutes or Litres</code>.</p><h3 id="cycle-irrigation-num-times-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-num-times-numeric" aria-hidden="true">#</a> Cycle_irrigation_num_times (numeric)</h3><p>Number of cycle irrigation times, set to 0 for single cycle. Value can be found in the published state on the <code>cycle_irrigation_num_times</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_num_times&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>#</code>.</p><h3 id="cycle-irrigation-interval-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-interval-numeric" aria-hidden="true">#</a> Cycle_irrigation_interval (numeric)</h3><p>Cycle irrigation interval. Value can be found in the published state on the <code>cycle_irrigation_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1440</code>. The unit of this value is <code>min</code>.</p><h3 id="irrigation-start-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-start-time-numeric" aria-hidden="true">#</a> Irrigation_start_time (numeric)</h3><p>Irrigation start time. Value can be found in the published state on the <code>irrigation_start_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>GMT+8</code>.</p><h3 id="irrigation-end-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-end-time-numeric" aria-hidden="true">#</a> Irrigation_end_time (numeric)</h3><p>Irrigation end time. Value can be found in the published state on the <code>irrigation_end_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>GMT+8</code>.</p><h3 id="last-irrigation-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-irrigation-duration-numeric" aria-hidden="true">#</a> Last_irrigation_duration (numeric)</h3><p>Last irrigation duration. Value can be found in the published state on the <code>last_irrigation_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="water-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#water-consumed-numeric" aria-hidden="true">#</a> Water_consumed (numeric)</h3><p>Water consumed (Litres). Value can be found in the published state on the <code>water_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>L</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25),r={},o=(0,i(83744).Z)(r,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);