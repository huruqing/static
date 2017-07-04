var gulp=require("gulp");
 var browserSync=require("browser-sync");

 gulp.task("server",function(){
    browserSync.init({
	   "server":"./",
	   "port":"8080",
	   "files":[
	       "./**/*.html",
		   "./**/*.css",
		   "./**/*.js"
		]
 });
});

gulp.task("default",function(){
   gulp.start("server");
 });