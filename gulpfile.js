const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// configure tsc
const tsc = ts.createProject('tsconfig.json');


gulp.task('transpile', () => {
    const tsResult = tsc.src()
        .pipe(tsc());

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['transpile'], () => {
    gulp.watch('src/**/*.ts', ['transpile']);
});

gulp.task('assets', () => {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['watch', 'assets']);

