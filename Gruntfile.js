//包含函数
module.exports = function(grunt){
	
	//任务配置，所有插件配置信息
	grunt.initConfig({
		
		//删除文件夹
		clean:{
			dist:'dist'
		},
		
		//通过sass编译成css
		sass:{
			dist:{
				files:[{
					expand:true,
					cwd:'scss',
					src:['*.scss'],
					dest:'dist/css',
					ext:'.css'
				}]
			}
		},
		
		//检测SASS是否改变
		watch:{
			scripts:{
				files:['scss/*.scss'],
				tasks:['sass'],
				options:{
					spawn:false
				}
				
			}
		}
		
	});
	
	//引用插件
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//告诉grunt我们中段需要做什么
	grunt.registerTask('default',['clean:dist','sass:dist','watch:scripts']);
	
}
