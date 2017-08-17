/**
 * Created by wang.ding on 2017/8/8.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    webpack = require('webpack');

var path = {
  config:'src/config.js',
  configUrl:'src/config-url.js',
  //jquery 插件源文件
  jqueryPluginPath: 'src/libs/jquery/*.js',

  //jquery 插件输出文件名
  jqueryPluginOutputName: 'jqueryPlugin.js',
  //jquery 插件输出文件夹
  jqueryPluginOutputPath: 'dist'
};

gulp.task('default',function () {
  //place code for your default task here
});

/**
 * Created by wang.ding on 2017/8/8.
 * 压缩jquery相关的插件及jquery本体文件
 * 技术：gulp-concat 合并 插件  www.npmjs.com/package/gulp-concat/
 */
gulp.task('jqueryPlugin',function () {
  return gulp.src([path.config,path.configUrl,path.jqueryPluginPath])
    .pipe(concat(path.jqueryPluginOutputName))
    .pipe(gulp.dest(path.jqueryPluginOutputPath))
});
