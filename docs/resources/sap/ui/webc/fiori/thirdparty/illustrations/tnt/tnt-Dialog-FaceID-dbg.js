sap.ui.define(function () { 'use strict';

  var dialogSvg = `<svg width="160" height="160" viewBox="0 0 160 160" id="tnt-Dialog-FaceID">
  <path fill="var(--sapIllus_BackgroundColor)" d="M148.1773,79.704 C148.0633,84.947 147.1013,90.474 145.1653,96.253 C120.0203,171.344 -13.6467,135.38 16.3653,59.478 C41.9483,-5.22 149.5223,18.343 148.1773,79.704" class="sapIllus_BackgroundColor"/>
  <path fill="var(--sapIllus_Layering2)" d="M67.9478,32.2186 C53.0958,37.9236 42.3968,54.0116 42.3968,72.9666 L42.3968,73.3546 L37.5618,74.3326 C37.5468,74.4266 37.4518,75.3086 37.3398,76.5276 C34.2198,78.1916 32.6038,81.8736 33.6668,85.3866 C34.2588,87.3406 35.5718,88.8756 37.2248,89.7966 C37.2918,90.4476 37.3658,91.0896 37.4508,91.7196 C37.4618,91.8296 37.4808,91.9306 37.4918,92.0316 L42.4268,93.0266 L42.4268,93.0706 C43.6848,97.2556 46.3208,100.8776 49.7928,103.8756 C53.2538,106.8846 57.6708,109.3096 62.7318,111.1806 C64.3988,111.8046 66.1498,112.3196 67.9478,112.7566 L67.9478,32.2186 Z" class="sapIllus_Layering2"/>
  <path fill="var(--sapIllus_ObjectFillColor)" d="M80.0602,29.9901 C77.6272,29.9901 75.2502,30.2601 72.9482,30.7691 L72.9482,113.6521 C75.2552,113.9761 77.6262,114.1671 80.0602,114.1671 C86.2172,114.1671 92.0342,113.0901 97.1752,111.1681 C102.2362,109.2971 106.6532,106.8721 110.1152,103.8631 C113.5852,100.8651 116.2222,97.2431 117.4802,93.0561 L117.5092,73.3961 L117.5092,72.9541 C117.5092,49.2281 100.7472,29.9901 80.0602,29.9901" class="sapIllus_ObjectFillColor"/>
  <path fill="var(--sapIllus_BrandColorSecondary)" d="M83.6783,30.4247 L83.6783,29.3857 C83.6783,27.8257 82.4133,26.5617 80.8543,26.5617 L78.6033,26.5617 C77.0433,26.5617 75.7803,27.8257 75.7803,29.3857 L75.7803,30.3737 C74.8303,30.4887 73.8883,30.6597 72.9483,30.8617 L72.9483,42.6937 L86.9483,42.6937 C87.6753,42.6937 88.3563,42.3347 88.7663,41.7347 L94.3633,33.5487 C90.7403,31.9037 87.1813,30.8787 83.6783,30.4247" class="sapIllus_BrandColorSecondary"/>
  <polygon fill="var(--sapIllus_StrokeDetailColor)" points="79.229 26.561 80.229 26.561 80.229 17.4 79.229 17.4" class="sapIllus_StrokeDetailColor"/>
  <polygon fill="var(--sapIllus_Layering1)" points="76.189 122.864 83.188 122.864 83.188 113.743 76.189 113.743" class="sapIllus_Layering1"/>
  <path fill="var(--sapIllus_BrandColorSecondary)" d="M122.9625 83.4013C122.9625 86.3083 122.7715 89.1063 122.4185 91.7123 122.4085 91.8233 122.3885 91.9233 122.3785 92.0243L117.3375 93.0403 117.3375 73.3193 122.3085 74.3253C122.3485 74.5773 122.3885 74.8383 122.4185 75.0893 122.7715 77.6963 122.9625 80.4933 122.9625 83.4013M102.2144 74.6141C99.6534 77.1941 93.6344 77.2331 91.0444 74.6341 88.4434 72.0441 89.8144 63.8031 92.3844 61.2441 94.9644 58.6831 99.0944 58.9331 101.6644 61.4941 104.2244 64.0531 104.7644 72.0441 102.2144 74.6141M104.2044 58.1141C100.3144 54.2141 94.0244 53.8531 90.1144 57.7331 86.2044 61.6241 84.1244 74.1341 88.0744 78.0841 92.0144 82.0231 101.1534 81.9641 105.0344 78.0531 108.9244 74.1341 108.0944 62.0041 104.2044 58.1141" class="sapIllus_BrandColorSecondary"/>
  <path fill="var(--sapIllus_StrokeDetailColor)" d="M95.0377 65.3388C96.0537 64.3288 97.6837 64.4248 98.6947 65.4368 99.7057 66.4468 99.9207 69.5978 98.9117 70.6128 97.9027 71.6288 95.5297 71.6448 94.5067 70.6208 93.4827 69.5978 94.0217 66.3478 95.0377 65.3388M89.9098 35.6278L69.3268 35.6278C69.0508 35.6278 68.8268 35.4038 68.8268 35.1278 68.8268 34.8518 69.0508 34.6278 69.3268 34.6278L89.9098 34.6278C90.1858 34.6278 90.4098 34.8518 90.4098 35.1278 90.4098 35.4038 90.1858 35.6278 89.9098 35.6278M88.0699 39.12L71.1669 39.12C70.8899 39.12 70.6669 38.896 70.6669 38.62 70.6669 38.344 70.8899 38.12 71.1669 38.12L88.0699 38.12C88.3459 38.12 88.5699 38.344 88.5699 38.62 88.5699 38.896 88.3459 39.12 88.0699 39.12" class="sapIllus_StrokeDetailColor"/>
  <path fill="var(--sapIllus_ObjectFillColor)" d="M48.4439,130.331 C68.1059,139.042 92.3189,140.416 112.0819,132.102 C108.5229,128.83 103.8369,126.139 98.0979,124.3 C92.5579,122.511 86.3019,121.504 79.6879,121.504 C73.0529,121.504 66.7869,122.511 61.2459,124.309 C56.3309,125.888 51.9859,127.891 48.4439,130.331" class="sapIllus_ObjectFillColor"/>
  <path fill="var(--sapIllus_StrokeDetailColor)" d="M112.4205,131.7343 C108.6865,128.3003 103.9195,125.6383 98.2515,123.8233 C92.4575,121.9523 86.2115,121.0033 79.6885,121.0033 C73.1325,121.0033 66.8755,121.9553 61.0935,123.8333 C56.0015,125.4663 51.6505,127.5143 48.1605,129.9183 C48.1075,129.9553 47.9825,130.0543 47.9455,130.1083 C48.2865,130.2613 48.6305,130.4113 48.9745,130.5603 L49.4825,130.2373 C52.7585,128.1053 56.7625,126.2733 61.3995,124.7843 C67.0845,122.9383 73.2375,122.0033 79.6885,122.0033 C86.1075,122.0033 92.2495,122.9353 97.9455,124.7753 C103.1805,126.4523 107.6195,128.8623 111.1545,131.9443 L111.5855,132.2983 C111.9145,132.1633 112.2415,132.0223 112.5685,131.8803 C112.5365,131.8403 112.4485,131.7613 112.4205,131.7343" class="sapIllus_StrokeDetailColor"/>
  <path fill="var(--sapIllus_Layering1)" d="M122.6041,76.664 C122.8341,78.813 122.9621,81.068 122.9621,83.401 C122.9621,85.507 122.8591,87.551 122.6701,89.51 C124.8001,88.172 126.2201,85.808 126.2201,83.107 C126.2201,80.378 124.7701,77.994 122.6041,76.664" class="sapIllus_Layering1"/>
  <path fill="var(--sapIllus_StrokeDetailColor)" d="M56.6129 108.9716C56.5339 108.9716 56.4539 108.9526 56.3799 108.9136 53.7569 107.5296 51.4299 105.9606 49.4649 104.2536 49.2709 104.0846 49.0789 103.9146 48.8889 103.7426 48.6849 103.5586 48.6699 103.2416 48.8549 103.0366 49.0419 102.8326 49.3579 102.8186 49.5609 103.0026 49.7449 103.1686 49.9309 103.3346 50.1199 103.4976 52.0279 105.1566 54.2909 106.6806 56.8459 108.0296 57.0909 108.1586 57.1839 108.4606 57.0549 108.7046 56.9659 108.8746 56.7919 108.9716 56.6129 108.9716M42.8082 67.0868C42.7872 67.0868 42.7652 67.0858 42.7432 67.0828 42.4692 67.0468 42.2762 66.7968 42.3112 66.5228 42.7032 63.5008 43.3762 60.5218 44.3152 57.6658 44.4002 57.4038 44.6832 57.2578 44.9462 57.3478 45.2072 57.4338 45.3512 57.7158 45.2642 57.9788 44.3462 60.7738 43.6862 63.6908 43.3032 66.6508 43.2702 66.9028 43.0552 67.0868 42.8082 67.0868M47.4684 51.8632C47.3924 51.8632 47.3144 51.8452 47.2414 51.8082 46.9954 51.6832 46.8974 51.3832 47.0234 51.1362 48.4124 48.4002 50.0694 45.8312 51.9474 43.5012 52.1204 43.2842 52.4374 43.2532 52.6504 43.4252 52.8644 43.5982 52.8994 43.9132 52.7264 44.1282 50.8914 46.4042 49.2724 48.9152 47.9134 51.5902 47.8254 51.7632 47.6504 51.8632 47.4684 51.8632M45.0689 98.4745C44.9889 98.5345 44.8989 98.5535 44.8089 98.5535 44.6389 98.5535 44.4789 98.4745 44.3799 98.3245 43.4089 96.7745 42.6589 95.1445 42.1299 93.4745L37.3889 92.5245C37.1789 92.4745 37.0189 92.3035 36.9999 92.0835L36.9489 91.7635C36.8799 91.2245 36.8089 90.6635 36.7499 90.1035 35.0589 89.0835 33.7689 87.4635 33.1889 85.5345 33.0899 85.2035 33.0089 84.8735 32.9599 84.5435 32.9089 84.2745 33.0899 84.0135 33.3589 83.9635 33.6389 83.9045 33.8889 84.1035 33.9389 84.3735 33.9889 84.6635 34.0589 84.9535 34.1489 85.2445 34.5899 86.6835 35.4689 87.9135 36.6299 88.7935 36.5989 88.3945 36.5689 87.9945 36.5389 87.5835 36.5189 87.3145 36.7289 87.0745 37.0089 87.0535 37.2689 87.0245 37.5189 87.2445 37.5389 87.5245 37.5789 88.1735 37.6299 88.8335 37.6989 89.4745 37.7289 89.8735 37.7689 90.2535 37.8289 90.6445 37.8589 90.9745 37.8989 91.2935 37.9389 91.6145L42.0289 92.4335 42.0289 88.5435C42.0289 88.2745 42.2589 88.0435 42.5289 88.0435 42.8089 88.0435 43.0289 88.2745 43.0289 88.5435L43.0289 92.9945C43.5289 94.6445 44.2689 96.2535 45.2289 97.7845 45.3799 98.0245 45.3089 98.3335 45.0689 98.4745M44.7496 78.414C44.6796 78.454 44.5996 78.475 44.5196 78.475 44.3396 78.475 44.1696 78.374 44.0786 78.204 43.7386 77.564 43.4596 77.004 43.2096 76.524 43.1486 76.404 43.0896 76.284 43.0286 76.174L43.0286 77.824C43.0286 78.103 42.8096 78.324 42.5286 78.324 42.2596 78.324 42.0286 78.103 42.0286 77.824L42.0286 73.934 38.0196 74.754C37.9886 74.984 37.9596 75.314 37.9196 75.714 37.8896 76.044 37.8496 76.424 37.8096 76.844 37.7496 77.454 37.6986 78.144 37.6396 78.853 37.6186 79.114 37.3986 79.314 37.1396 79.314L37.0996 79.314C36.8286 79.294 36.6186 79.054 36.6486 78.774 36.6886 78.334 36.7196 77.894 36.7496 77.475 36.3796 77.754 36.0386 78.054 35.7286 78.394 35.6296 78.504 35.4886 78.554 35.3586 78.554 35.2386 78.554 35.1086 78.514 35.0196 78.424 34.8186 78.234 34.7996 77.914 34.9886 77.714 35.5386 77.124 36.1696 76.614 36.8686 76.225 36.9696 75.134 37.0496 74.353 37.0686 74.254 37.0996 74.044 37.2596 73.884 37.4596 73.844L42.4296 72.834C42.5786 72.804 42.7286 72.844 42.8496 72.944 42.9696 73.034 43.0286 73.174 43.0286 73.324L43.0286 73.824C43.2886 74.424 43.8186 75.594 44.9596 77.734 45.0896 77.984 44.9996 78.284 44.7496 78.414M53.3912 92.1093C53.2792 92.1093 53.1662 92.0723 53.0732 91.9953 51.5322 90.7243 50.3012 89.3003 49.4152 87.7653 48.7332 86.5853 48.1122 85.5013 47.5472 84.5053 47.4112 84.2643 47.4952 83.9593 47.7352 83.8233 47.9742 83.6843 48.2802 83.7693 48.4162 84.0103 48.9812 85.0053 49.6002 86.0873 50.2812 87.2653 51.1072 88.6973 52.2612 90.0293 53.7092 91.2233 53.9222 91.3993 53.9532 91.7143 53.7772 91.9273 53.6782 92.0473 53.5352 92.1093 53.3912 92.1093M63.8502 81.5184L63.8482 81.5184C60.4692 81.5054 57.4082 80.4984 55.4502 78.7574 55.2432 78.5744 55.2242 78.2574 55.4082 78.0514 55.5922 77.8434 55.9082 77.8274 56.1142 78.0094 57.8932 79.5914 60.7132 80.5064 63.8522 80.5184 64.1282 80.5194 64.3512 80.7444 64.3502034 81.0204 64.3492 81.2954 64.1252 81.5184 63.8502 81.5184M53.398 72.7636C53.138 72.7636 52.919 72.5626 52.9 72.2986 52.868 71.8416 52.853 71.3746 52.852 70.9006 52.852 68.5396 53.239 65.9326 53.94 63.5596 54.019 63.2946 54.298 63.1446 54.561 63.2216 54.826 63.2996 54.977 63.5776 54.899 63.8426 54.224 66.1266 53.852 68.6326 53.852 70.8996 53.853 71.3496 53.868 71.7946 53.898 72.2286 53.918 72.5036 53.71 72.7426 53.434 72.7626 53.422 72.7636 53.411 72.7636 53.398 72.7636M57.4947 58.2499C57.3677 58.2499 57.2417 58.2039 57.1467 58.1089 56.9517 57.9139 56.9387 57.6109 57.1347 57.4159L57.1607 57.3899C59.3357 55.2289 62.3917 54.1969 65.5077 54.5889 65.7807 54.6229 65.9747 54.8729 65.9407 55.1469 65.9067 55.4219 65.6497 55.6119 65.3827 55.5809 62.5827 55.2309 59.8237 56.1539 57.8667 58.0979 57.7657 58.1979 57.6297 58.2499 57.4947 58.2499M60.6529 76.3397C60.5949 76.3397 60.5369 76.3297 60.4789 76.3087 59.5119 75.9507 58.7069 75.4537 58.0849 74.8317 56.8119 73.5597 56.5449 71.3627 56.5449 69.7447 56.5449 69.1407 56.5829 68.5067 56.6569 67.8607 56.6889 67.5857 56.9389 67.3927 57.2119 67.4217 57.4859 67.4537 57.6819 67.7017 57.6509 67.9767 57.5809 68.5837 57.5449 69.1787 57.5449 69.7447 57.5449 71.7657 57.9879 73.3197 58.7919 74.1247 59.3109 74.6447 59.9959 75.0637 60.8269 75.3707 61.0859 75.4667 61.2169 75.7537 61.1219 76.0137 61.0479 76.2147 60.8559 76.3397 60.6529 76.3397M59.7613 61.5936C59.6383 61.5936 59.5163 61.5506 59.4233 61.4616 59.2273 61.2756 59.2003 60.9806 59.3833 60.7806 59.4053 60.7566 59.4593 60.7046 59.4853 60.6856 60.6953 59.4766 62.3833 58.7846 64.1853 58.7846 65.8273 58.7846 67.4553 59.3616 68.7703 60.4086 68.9863 60.5806 69.0223 60.8956 68.8493 61.1116 68.6773 61.3276 68.3633 61.3646 68.1473 61.1906 67.0093 60.2836 65.6023 59.7846 64.1853 59.7846 62.6493 59.7846 61.2113 60.3726 60.1373 61.4406 60.0353 61.5406 59.8983 61.5936 59.7613 61.5936M62.4342 65.3456C63.4502 64.3366 65.0802 64.4326 66.0912 65.4436 67.1022 66.4536 67.3172 69.6046 66.3082 70.6196 65.2982 71.6366 62.9262 71.6526 61.9032 70.6286 60.8782 69.6046 61.4182 66.3556 62.4342 65.3456" class="sapIllus_StrokeDetailColor"/>
  <path fill="var(--sapIllus_BrandColorSecondary)" d="M83.6783 13.7059C83.6783 15.8869 81.9093 17.6549 79.7293 17.6549 77.5473 17.6549 75.7803 15.8869 75.7803 13.7059 75.7803 11.5239 77.5473 9.7559 79.7293 9.7559 81.9093 9.7559 83.6783 11.5239 83.6783 13.7059M72.9478 59.6298L72.9478 77.6898C76.0938 73.9228 75.7398 64.3598 72.9478 59.6298" class="sapIllus_BrandColorSecondary"/>
  <path fill="var(--sapIllus_StrokeDetailColor)" d="M118.0074 73.8798L118.0094 72.9538C118.0094 48.9878 100.9854 29.4908 80.0604 29.4908 77.6294 29.4908 75.2524 29.7558 72.9474 30.2588L72.9474 31.2868C75.2494 30.7668 77.6274 30.4908 80.0604 30.4908 100.4344 30.4908 117.0094 49.5398 117.0094 72.9538L117.0074 74.0158C116.7044 75.1268 115.3164 78.2878 109.6114 87.2388 105.3294 93.9608 92.2314 98.4208 77.7654 98.1218 76.1124 98.0858 74.5064 97.9838 72.9474 97.8268L72.9474 98.8358C74.4964 98.9858 76.0954 99.0848 77.7434 99.1208 78.2044 99.1318 78.6674 99.1368 79.1344 99.1368 91.3434 99.1368 105.4144 95.6888 110.4554 87.7758 113.5804 82.8718 115.7934 79.1018 117.0034 76.6298L116.9794 92.9838C115.8024 96.8468 113.3824 100.3798 109.7854 103.4868 106.4844 106.3568 102.1824 108.7828 96.9994 110.6998 91.7344 112.6688 86.0344 113.6668 80.0604 113.6668 77.6404 113.6668 75.2714 113.4798 72.9474 113.1498L72.9474 114.1678C74.2234 114.3438 75.5124 114.4768 76.8174 114.5568L76.1894 114.5568 83.1884 116.4328 83.1884 114.5648C88.1474 114.2738 92.9004 113.3008 97.3484 111.6378 102.6424 109.6798 107.0484 107.1918 110.4414 104.2418 114.2034 100.9908 116.7334 97.2768 117.9574 93.2008 117.9724 93.1548 117.9794 93.1068 117.9794 93.0588L118.0074 74.1468C118.0094 74.1368 118.0144 74.1238 118.0164 74.1148 118.0344 74.0338 118.0274 73.9548 118.0074 73.8798M67.9478 37.1552L65.4508 33.8682C66.2808 33.4892 67.1148 33.1562 67.9478 32.8462L67.9478 31.7862C66.7908 32.2032 65.6278 32.6732 64.4788 33.2182 64.4638 33.2262 64.3878 33.2592 64.3648 33.2702 61.7018 34.6362 59.1708 36.3592 56.8438 38.3912 56.6358 38.5742 56.6148 38.8892 56.7968 39.0972 56.8958 39.2112 57.0348 39.2682 57.1738 39.2682 57.2908 39.2682 57.4078 39.2272 57.5028 39.1452 59.6838 37.2382 62.0538 35.6202 64.5418 34.3162L67.9478 38.8062 67.9478 37.1552zM67.9478 97.1444C64.9288 96.5724 62.1638 95.7744 59.7368 94.7544 59.4838 94.6484 59.1888 94.7674 59.0828 95.0224 58.9748 95.2764 59.0948 95.5704 59.3498 95.6764 61.8918 96.7444 64.7878 97.5774 67.9478 98.1654L67.9478 97.1444zM67.9478 112.2538C66.3188 111.8538 64.7248 111.3788 63.1878 110.8158 62.9308 110.7228 62.6408 110.8528 62.5468 111.1128 62.4518 111.3718 62.5848 111.6588 62.8438 111.7548 64.4898 112.3578 66.1998 112.8598 67.9478 113.2808L67.9478 112.2538z" class="sapIllus_StrokeDetailColor"/>
  <path fill="var(--sapIllus_AccentColor)" d="M72.9478,7.0077 L72.9478,118.1527 C72.9478,118.7087 72.4968,119.1597 71.9398,119.1597 L68.9558,119.1597 C68.3988,119.1597 67.9478,118.7087 67.9478,118.1527 L67.9478,7.0077 C67.9478,6.4507 68.3988,5.9997 68.9558,5.9997 L71.9398,5.9997 C72.4968,5.9997 72.9478,6.4507 72.9478,7.0077" class="sapIllus_AccentColor"/>
</svg>`;

  return dialogSvg;

});
