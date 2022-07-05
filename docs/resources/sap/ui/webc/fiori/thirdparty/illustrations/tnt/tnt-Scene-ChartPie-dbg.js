sap.ui.define(function () { 'use strict';

    var sceneSvg = `<svg width="320" height="240" viewBox="0 0 320 240" id="tnt-Scene-ChartPie">
    <path fill="var(--sapIllus_BackgroundColor)" d="M144.142448,6.9588 C186.245448,1.9358 228.590448,16.5628 250.798448,52.7258 C273.190448,88.9188 275.292448,146.4378 245.625448,176.1508 C215.987448,205.6838 154.427448,207.2008 111.196448,183.3578 C67.965448,159.5158 43.247448,110.3458 51.619448,73.4838 C60.207448,36.4738 102.069448,11.8018 144.142448,6.9588" class="sapIllus_BackgroundColor"/>
    <path fill="var(--sapIllus_Layering2)" d="M163.777148 206.1713L163.744148 206.1713C162.916148 206.1523 162.258148 205.4673 162.276148 204.6393L163.517148 146.9193C163.535148 146.1023 164.203148 145.4513 165.016148 145.4513L165.049148 145.4513C165.878148 145.4703 166.535148 146.1553 166.517148 146.9833L165.276148 204.7033C165.258148 205.5213 164.590148 206.1713 163.777148 206.1713M106.314248 220.2504C106.199248 220.2504 106.081248 220.2374 105.963248 220.2094 105.158248 220.0164 104.662248 219.2064 104.854248 218.4004L119.613248 156.8494C119.806248 156.0434 120.613248 155.5454 121.421248 155.7394 122.227248 155.9334 122.723248 156.7424 122.531248 157.5484L107.772248 219.1004C107.607248 219.7884 106.992248 220.2504 106.314248 220.2504M204.615048 220.2504C203.938048 220.2504 203.324048 219.7894 203.158048 219.1034L188.649048 159.1414C188.455048 158.3364 188.949048 157.5254 189.755048 157.3304 190.560048 157.1364 191.371048 157.6314 191.565048 158.4364L206.074048 218.3974C206.268048 219.2024 205.774048 220.0134 204.969048 220.2084 204.850048 220.2364 204.731048 220.2504 204.615048 220.2504" class="sapIllus_Layering2"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M233.954648,160.9348 L79.835648,155.1498 C78.179648,155.0878 76.887648,153.6958 76.949648,152.0398 L81.539648,29.7568 C81.601648,28.1008 82.994648,26.8088 84.649648,26.8708 L238.769648,32.6558 C240.425648,32.7178 241.716648,34.1108 241.654648,35.7658 L237.064648,158.0498 C237.002648,159.7048 235.610648,160.9968 233.954648,160.9348" class="sapIllus_ObjectFillColor"/>
    <polygon fill="var(--sapIllus_StrokeDetailColor)" points="81.202 45.639 81.052 44.685 241.157 44.359 240.481 55.021" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M240.780948,50.6657 L81.293948,44.6797 C81.120948,44.6727 80.984948,44.5267 80.9916895,44.3537 L81.539948,29.7567 C81.601948,28.1007 82.993948,26.8087 84.649948,26.8707 L238.769948,32.6557 C240.424948,32.7177 241.716948,34.1107 241.654948,35.7667 L241.106948,50.3637 C241.100948,50.5367 240.954948,50.6727 240.780948,50.6657" class="sapIllus_BrandColorSecondary"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M233.973148,160.436605 C234.649148,160.4563 235.277148,160.2233 235.767148,159.7693 C236.257148,159.3153 236.540148,158.6983 236.565148,158.0313 L241.155148,35.7473 C241.206148,34.3703 240.128148,33.2073 238.751148,33.1553 L84.631148,27.3713 C83.958148,27.3473 83.327148,27.5823 82.837148,28.0363 C82.348148,28.4903 82.064148,29.1083 82.039148,29.7753 L77.449148,152.0583 C77.398148,153.4363 78.476148,154.5993 79.853148,154.6503 L233.973148,160.436605 Z M234.068148,161.4363 C234.024148,161.4363 233.980148,161.4363 233.936148,161.4343 L79.816148,155.6493 C78.882148,155.6153 78.017148,155.2183 77.382148,154.5323 C76.746148,153.8473 76.415148,152.9553 76.450148,152.0213 L81.040148,29.7383 C81.075148,28.8033 81.472148,27.9383 82.157148,27.3033 C82.842148,26.6673 83.727148,26.3353 84.669148,26.3723 L238.788148,32.1563 C239.723148,32.1913 240.587148,32.5883 241.223148,33.2733 C241.858148,33.9583 242.189148,34.8513 242.154148,35.7853 L237.564148,158.0683 C237.494148,159.9523 235.938148,161.4363 234.068148,161.4363 L234.068148,161.4363 Z" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M276.790348 65.9455L263.480348 72.4835C262.827348 72.8045 262.766348 73.7125 263.371348 74.1175L275.688348 82.3755C276.293348 82.7805 277.109348 82.3795 277.158348 81.6535L278.150348 66.8575C278.199348 66.1315 277.443348 65.6245 276.790348 65.9455M115.098748 16.2146C114.138748 18.2036 111.747748 19.0376 109.758748 18.0776 107.769748 17.1176 106.935748 14.7266 107.895748 12.7376 108.855748 10.7486 111.246748 9.9146 113.235748 10.8746 115.224748 11.8346 116.058748 14.2256 115.098748 16.2146" class="sapIllus_BrandColorSecondary"/>
    <path fill="var(--sapIllus_BackgroundColor)" d="M219.396448,229.793 C219.396448,233.107 192.309448,235.793 158.896448,235.793 C125.483448,235.793 98.396448,233.107 98.396448,229.793 C98.396448,226.479 125.483448,223.793 158.896448,223.793 C192.309448,223.793 219.396448,226.479 219.396448,229.793" class="sapIllus_BackgroundColor"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M117.576548,38.0916 C116.934548,39.4206 115.337548,39.9776 114.008548,39.3366 C112.679548,38.6946 112.122548,37.0976 112.763548,35.7686 C113.405548,34.4396 115.002548,33.8816 116.331548,34.5236 C117.660548,35.1646 118.218548,36.7626 117.576548,38.0916" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M115.171748,34.7572 C114.930748,34.7572 114.688748,34.7972 114.454748,34.8792 C113.906748,35.0692 113.465748,35.4632 113.213748,35.9862 C112.961748,36.5082 112.927748,37.0972 113.118748,37.6452 C113.310748,38.1932 113.702748,38.6342 114.226748,38.8862 C115.301748,39.4062 116.606748,38.9522 117.126748,37.8732 C117.378748,37.3522 117.412748,36.7622 117.221748,36.2152 C117.029748,35.6672 116.637748,35.2262 116.113748,34.9742 C115.815748,34.8292 115.493748,34.7572 115.171748,34.7572 M115.164748,40.1022 C114.702748,40.1022 114.234748,40.0002 113.790748,39.7862 C112.215748,39.0262 111.552748,37.1252 112.313748,35.5502 C112.681748,34.7872 113.324748,34.2132 114.124748,33.9352 C114.928748,33.6562 115.785748,33.7052 116.549748,34.0732 C117.312748,34.4422 117.886748,35.0852 118.165748,35.8852 C118.444748,36.6852 118.395748,37.5462 118.026748,38.3092 C117.480748,39.4412 116.345748,40.1022 115.164748,40.1022" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M209.695248,41.6032 C209.053248,42.9322 207.456248,43.4892 206.127248,42.8482 C204.798248,42.2062 204.241248,40.6092 204.882248,39.2802 C205.524248,37.9512 207.121248,37.3932 208.450248,38.0352 C209.779248,38.6762 210.337248,40.2742 209.695248,41.6032" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M207.292748 38.2689C206.483748 38.2689 205.706748 38.7219 205.332748 39.4979 205.080748 40.0199 205.046748 40.6089 205.237748 41.1569 205.428748 41.7049 205.821748 42.1459 206.344748 42.3979 206.866748 42.6509 207.455748 42.6849 208.003748 42.4929 208.551748 42.3009 208.992748 41.9089 209.244748 41.3849 209.765748 40.3069 209.311748 39.0049 208.232748 38.4849 207.930748 38.3379 207.608748 38.2689 207.292748 38.2689M207.282748 43.6139C206.820748 43.6139 206.352748 43.5119 205.908748 43.2979 205.146748 42.9299 204.571748 42.2869 204.293748 41.4869 204.014748 40.6859 204.063748 39.8259 204.432748 39.0619 205.192748 37.4869 207.092748 36.8249 208.668748 37.5839 210.242748 38.3449 210.905748 40.2459 210.145748 41.8209 209.598748 42.9529 208.463748 43.6139 207.282748 43.6139M152.886548 143.1927C134.242548 140.9097 119.737548 125.0187 119.145548 106.2297 118.810548 95.5827 122.706548 85.5467 130.116548 77.9747 137.445548 70.4867 147.207548 66.3787 157.647548 66.3787 157.926548 66.3787 158.240548 66.3467 158.441548 66.5567 158.552548 66.6727 158.610548 66.8257 158.603548 66.9857L157.165548 105.3057 161.926548 106.6677 194.014548 117.8317C188.015548 134.8487 171.103548 145.4187 152.886548 143.1927M196.609548 98.0477L159.068548 104.8097 158.195548 104.5597 159.603548 67.0237C159.619548 66.5977 159.459548 66.1767 159.164548 65.8677 158.869548 65.5567 158.473548 65.3837 158.049548 65.3797 157.914548 65.3797 157.781548 65.3787 157.646548 65.3787 146.936548 65.3787 136.919548 69.5937 129.402548 77.2757 121.799548 85.0447 117.801548 95.3387 118.145548 106.2607 118.752548 125.5397 133.636548 141.8427 152.765548 144.1847 154.430548 144.3887 156.081548 144.4887 157.718548 144.4887 174.453548 144.4867 189.348548 134.0647 194.953548 118.1587L195.015548 118.1797C197.239548 111.7787 197.831548 104.8407 196.609548 98.0477" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_AccentColor)" d="M199.125548,106.863 C199.675548,93.338 193.644548,79.846 181.971548,71.372 C181.354548,70.925 180.483548,71.093 180.056548,71.724 L157.434548,105.131 L197.597548,108.199 C198.389548,108.26 199.093548,107.657 199.125548,106.863" class="sapIllus_AccentColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M160.917048,136.6194 L157.756048,105.3584 L134.532048,84.1984 C132.169048,86.7914 130.201048,89.8234 128.771048,93.2444 C122.081048,109.2524 129.634048,127.6534 145.642048,134.3434 C150.643048,136.4334 155.879048,137.1334 160.917048,136.6194" class="sapIllus_BrandColorSecondary"/>
    <path fill="var(--sapIllus_Layering2)" d="M180.991548,124.3921 L157.730548,105.2571 L151.498548,136.1531 C162.821548,138.4371 173.946548,134.3401 181.158548,126.3401 C181.672548,125.7701 181.584548,124.8791 180.991548,124.3921" class="sapIllus_Layering2"/>
    <path fill="var(--sapIllus_BrandColorPrimary)" d="M157.702748,105.4999 L148.295748,76.8779 C148.058748,76.1589 147.270748,75.8019 146.563748,76.0699 C141.988748,77.8019 137.823748,80.5889 134.460748,84.2689 L157.702748,105.4999 Z" class="sapIllus_BrandColorPrimary"/>
</svg>`;

    return sceneSvg;

});
