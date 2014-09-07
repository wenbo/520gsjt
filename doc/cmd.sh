sed -i "s/content_/content_/g" `grep content_ -rl .`

scp wenbo@0371zhong.com:/var/www/html/backup/20140901/520gsjt.com.tar.gz ./

scp 520gsjt.com.tar.gz wenbo@0371zhong.com:/var/www/html/

scp index.html wenbo@0371zhong.com:/var/www/html/520gsjt.com/
scp js/main.js wenbo@0371zhong.com:/var/www/html/520gsjt.com/js/main.js
scp css/style.css wenbo@0371zhong.com:/var/www/html/520gsjt.com/css/style.css
scp index.html wenbo@0371zhong.com:/var/www/html/520gsjt.com/index.html

scp video.html wenbo@0371zhong.com:/var/www/html/520gsjt.com/video.html

wget yamaha.com.cn/jwplayer/player.swf

wget yamaha.com.cn/resource/musicschool/news/20140514/20140514002.flv

wget yamaha.com.cn/resource/musicschool/news/20140514/20140514002.jpg
wget yamaha.com.cn/jwplayer/jwplayer.js

scp -r video/flv/[1-7].flv wenbo@0371zhong.com:/var/www/html/520gsjt.com/video/flv/

scp -r images/video/ wenbo@0371zhong.com:/var/www/html/520gsjt.com/images/

scp -r jwplayer wenbo@0371zhong.com:/var/www/html/520gsjt.com/

scp -r video/flv/0905/ wenbo@0371zhong.com:/var/www/html/520gsjt.com/video/flv/

scp -r images/video/0905/ wenbo@0371zhong.com:/var/www/html/520gsjt.com/images/video/

scp index.html video.html wenbo@0371zhong.com:/var/www/html/520gsjt.com/
scp css/style.css wenbo@0371zhong.com:/var/www/html/520gsjt.com/css/style.css
scp images/new_icon.gif wenbo@0371zhong.com:/var/www/html/520gsjt.com/images/new_icon.gif

scp gallery/index.html wenbo@0371zhong.com:/var/www/html/520gsjt.com/gallery/

scp -r video/flv/0906/ wenbo@0371zhong.com:/var/www/html/520gsjt.com/video/flv/

scp video.html wenbo@0371zhong.com:/var/www/html/520gsjt.com/video.html
scp -r images/video/0906/ wenbo@0371zhong.com:/var/www/html/520gsjt.com/images/video/

scp js/JSResponsiveWeb.js js/main.js js/video_main.js js/video_numNav.js wenbo@0371zhong.com:/var/www/html/520gsjt.com/js/
scp js/video_main.js wenbo@0371zhong.com:/var/www/html/520gsjt.com/js/

scp images/buzaiyouyu.jpg  images/shizizuo_cover.png images/weishi_cover.png  wenbo@0371zhong.com:/var/www/html/520gsjt.com/images/
