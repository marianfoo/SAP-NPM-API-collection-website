sap.ui.define(function () { 'use strict';

  var dialogSvg = `<svg width="160" height="160" viewBox="0 0 160 160" id="tnt-Dialog-Systems">
  <path fill="var(--sapIllus_ObjectFillColor)" d="M128.3767,71.6423 C128.0287,71.3123 127.8597,70.9063 127.8707,70.1513 C127.8937,68.5003 127.7237,66.8383 127.3947,65.2213 C126.7407,62.0073 125.4067,58.9423 123.5057,56.2703 C123.5057,56.2583 123.4947,56.2473 123.4827,56.2353 C119.1997,50.2043 112.1607,46.2853 104.1937,46.2853 C103.3257,46.2853 102.4687,46.3323 101.6247,46.4263 C100.1707,46.5913 98.7677,46.8983 97.4097,47.3093 C97.3947,47.3123 97.3827,47.3103 97.3667,47.3153 C96.5337,47.5533 96.1927,47.0623 96.1927,47.0623 C94.8427,45.1063 93.3057,43.3033 91.5807,41.6863 C85.5497,35.9843 77.4307,32.4993 68.4907,32.4993 C67.8097,32.4993 67.1297,32.5233 66.4607,32.5703 C56.0777,33.1803 46.9607,38.5073 41.2347,46.4383 C36.0897,53.5133 34.5597,61.5873 35.0627,70.1583 C35.0757,70.3773 35.0857,70.6093 34.9847,70.8033 C34.8637,71.0383 34.6087,71.1673 34.3697,71.2803 C24.3317,76.0593 17.4997,85.5723 17.4997,96.9133 C17.4997,104.5513 20.5617,111.4733 25.5247,116.5073 C27.1907,118.2083 29.0677,119.6983 31.1217,120.9183 C32.8927,122.0563 34.7707,123.0653 36.7527,123.9223 C40.5897,125.6003 44.6497,126.5273 48.8617,126.6913 L103.1967,126.6913 C110.4127,126.6913 116.6067,125.8583 121.6407,124.2153 C122.4857,123.9453 123.2947,123.6523 124.0807,123.3243 C124.1157,123.3123 124.1397,123.3003 124.1747,123.2883 C124.5387,123.1593 124.9137,123.0193 125.2777,122.8543 C125.8407,122.6203 126.3807,122.3733 126.9207,122.1273 C126.9317,122.1153 126.9437,122.1033 126.9667,122.1033 C136.3887,117.4693 142.8887,107.7663 142.8887,96.5493 C142.8887,86.8463 137.9217,77.4243 129.5217,72.4043 C129.0307,72.1113 128.6487,71.9003 128.3767,71.6423" class="sapIllus_ObjectFillColor"/>
  <path fill="var(--sapIllus_StrokeDetailColor)" d="M68.491,32.9995 C67.821,32.9995 67.15,33.0225 66.496,33.0685 C56.544,33.6535 47.486,38.6335 41.64,46.7315 C37,53.1115 35.012,60.7655 35.562,70.1295 C35.576,70.3605 35.596,70.7105 35.429,71.0325 C35.226,71.4245 34.841,71.6095 34.586,71.7315 C24.355,76.6025 18,86.2505 18,96.9135 C18,104.1685 20.799,111.0015 25.882,116.1565 C27.541,117.8505 29.388,119.3085 31.377,120.4885 C33.169,121.6395 35.039,122.6375 36.951,123.4635 C40.722,125.1125 44.735,126.0295 48.881,126.1905 L103.196,126.1905 C110.348,126.1905 116.502,125.3665 121.485,123.7395 C122.353,123.4635 123.138,123.1765 123.887,122.8625 L124.175,123.2885 L124.008,122.8165 C124.359,122.6925 124.721,122.5575 125.073,122.3985 C125.613,122.1725 126.123,121.9405 126.631,121.7095 L126.714,121.6275 L126.824,121.6175 C136.427,116.8565 142.388,107.2605 142.388,96.5495 C142.388,86.7585 137.36,77.6715 129.264,72.8325 L129.064,72.7135 C128.658,72.4735 128.307,72.2665 128.033,72.0055 C127.557,71.5555 127.359,70.9985 127.37,70.1445 C127.392,68.5665 127.236,66.9435 126.904,65.3205 C126.268,62.1945 124.952,59.1655 123.098,56.5605 L123.006,56.4165 C118.611,50.3575 111.616,46.7855 104.194,46.7855 C103.348,46.7855 102.503,46.8315 101.679,46.9235 C100.337,47.0755 98.948,47.3665 97.554,47.7875 L97.459,47.8085 C96.548,48.0425 95.979,47.6315 95.782,47.3465 C94.434,45.3955 92.906,43.6135 91.239,42.0505 C85.065,36.2135 76.987,32.9995 68.491,32.9995 M103.196,127.1905 L48.861,127.1905 C44.571,127.0235 40.436,126.0785 36.553,124.3805 C34.593,123.5335 32.674,122.5105 30.85,121.3395 C28.803,120.1235 26.887,118.6115 25.168,116.8565 C19.901,111.5165 17,104.4325 17,96.9135 C17,85.8605 23.573,75.8665 34.155,70.8295 C34.289,70.7655 34.492,70.6675 34.541,70.5725 C34.582,70.4945 34.572,70.3165 34.564,70.1875 C34,60.5835 36.05,52.7185 40.831,46.1455 C46.852,37.8035 56.183,32.6735 66.431,32.0705 C67.103,32.0235 67.798,31.9995 68.491,31.9995 C77.244,31.9995 85.566,35.3115 91.925,41.3225 C93.641,42.9335 95.217,44.7695 96.604,46.7775 C96.61,46.7815 96.78,46.9635 97.229,46.8345 L97.312,46.8155 C98.748,46.3855 100.179,46.0875 101.568,45.9295 C102.429,45.8335 103.311,45.7855 104.194,45.7855 C112.01,45.7855 119.372,49.5835 123.889,55.9455 L123.982,56.0785 C125.88,58.7745 127.228,61.8985 127.885,65.1215 C128.23,66.8145 128.393,68.5095 128.37,70.1575 C128.361,70.8075 128.498,71.0675 128.72,71.2785 L128.721,71.2795 C128.914,71.4625 129.205,71.6355 129.574,71.8535 L129.778,71.9755 C138.174,76.9915 143.388,86.4085 143.388,96.5495 C143.388,107.6625 137.192,117.6185 127.216,122.5385 L127.128,122.5825 C127.127,122.5835 127.126,122.5835 127.124,122.5845 L127.081,122.6045 C126.552,122.8455 126.022,123.0855 125.471,123.3155 C125.106,123.4805 124.719,123.6265 124.342,123.7605 C123.497,124.1095 122.685,124.4065 121.793,124.6915 C116.712,126.3505 110.454,127.1905 103.196,127.1905" class="sapIllus_StrokeDetailColor"/>
  <path fill="var(--sapIllus_PatternShadow)" d="M142.2695,95.9609 C142.2695,107.1779 136.4345,116.8169 126.3475,121.5149 C126.3245,121.5149 126.3125,121.5269 126.3005,121.5389 C125.7615,121.7849 125.2215,122.0309 124.6585,122.2659 C124.2945,122.4299 123.9195,122.5709 123.5555,122.6999 C123.5205,122.7119 123.4965,122.7239 123.4615,122.7349 C122.6755,123.0639 121.8665,123.3569 121.0215,123.6269 C115.9875,125.2699 109.7925,126.1029 102.5775,126.1029 L48.2425,126.1029 C44.0305,125.9379 40.4475,124.8809 36.6115,123.2029 C34.6285,122.3459 32.7755,121.2049 31.0045,120.0669 C28.9505,118.8459 27.6625,117.7189 25.9965,116.0179 C24.8705,114.8679 23.5965,113.4539 22.6935,112.1289 C23.8895,113.1729 24.3305,114.1699 25.6915,114.9799 C35.6075,121.5319 39.2195,120.5879 43.4315,120.7529 L97.7665,120.7529 C104.9825,120.7529 111.1775,119.9199 116.2105,118.2769 C117.0555,118.0069 117.8655,117.7139 118.6515,117.3849 C118.6865,117.3739 118.7095,117.3619 118.7455,117.3499 C119.1085,117.2209 119.4845,117.0799 119.8475,116.9159 C120.4115,116.6809 120.9505,116.4349 121.4905,116.1879 C121.5025,116.1769 121.5145,116.1649 121.5375,116.1649 C130.9585,111.5309 137.4585,101.8269 137.4585,90.6109 C137.4585,84.7909 135.7425,79.9919 132.4925,75.2629 C138.7465,80.5779 142.2695,87.7009 142.2695,95.9609" class="sapIllus_PatternShadow"/>
  <path fill="var(--sapIllus_BrandColorSecondary)" d="M71.6111,60.8229 L59.8401,61.5699 C59.2891,61.6049 58.8141,61.1859 58.7791,60.6349 L58.0321,48.8639 C57.9971,48.3129 58.4151,47.8379 58.9661,47.8029 L70.7371,47.0559 C71.2891,47.0209 71.7641,47.4399 71.7991,47.9909 L72.5461,59.7619 C72.5811,60.3129 72.1621,60.7879 71.6111,60.8229" class="sapIllus_BrandColorSecondary"/>
  <path fill="var(--sapIllus_Layering1)" d="M109.5795,109.3939 L95.3195,107.3989 C94.7725,107.3219 94.3905,106.8169 94.4675,106.2699 L96.4625,92.0099 C96.5395,91.4629 97.0445,91.0809 97.5915,91.1579 L111.8515,93.1529 C112.3985,93.2299 112.7805,93.7349 112.7035,94.2819 L110.7085,108.5419 C110.6315,109.0889 110.1265,109.4709 109.5795,109.3939" class="sapIllus_Layering1"/>
  <path fill="var(--sapIllus_BrandColorSecondary)" d="M49.6758,100.6829 C49.6758,96.4819 46.2708,93.0769 42.0698,93.0769 C37.8688,93.0769 34.4638,96.4819 34.4638,100.6829 C34.4638,104.8839 37.8688,108.2889 42.0698,108.2889 C46.2708,108.2889 49.6758,104.8839 49.6758,100.6829" class="sapIllus_BrandColorSecondary"/>
  <path fill="var(--sapIllus_AccentColor)" d="M88.7962,81.6153 L112.0942,73.5993 C112.8222,73.3493 113.0062,72.4043 112.4252,71.8993 L93.8342,55.7303 C93.2532,55.2253 92.3432,55.5383 92.1962,56.2943 L87.4892,80.4783 C87.3422,81.2343 88.0682,81.8653 88.7962,81.6153" class="sapIllus_AccentColor"/>
  <path fill="var(--sapIllus_Layering2)" d="M71.9274,94.7569 L53.8824,82.1759 C53.4294,81.8599 53.3184,81.2369 53.6344,80.7839 L57.2584,75.5859 C57.5734,75.1329 58.1974,75.0219 58.6504,75.3379 L76.6954,87.9189 C77.1484,88.2349 77.2594,88.8579 76.9434,89.3109 L73.3194,94.5089 C73.0034,94.9619 72.3804,95.0729 71.9274,94.7569" class="sapIllus_Layering2"/>
  <path fill="var(--sapIllus_BackgroundColor)" d="M80.1942,139.794 C101.1812,139.794 118.1942,142.48 118.1942,145.794 C118.1942,149.108 101.1812,151.794 80.1942,151.794 C59.2072,151.794 42.1942,149.108 42.1942,145.794 C42.1942,142.48 59.2072,139.794 80.1942,139.794" class="sapIllus_BackgroundColor"/>
</svg>
`;

  return dialogSvg;

});
