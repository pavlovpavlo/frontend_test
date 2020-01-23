var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss') // путь к файлам-исходникам
    .pipe(sass().on('error', sass.logError)) // название плагина, через который прогоняем их
    .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('css/')) // путь к папке, куда помещаем конечные файлы
})

gulp.task('watch', function () {
   gulp.watch('sass/**/*.scss', ['sass']);
});