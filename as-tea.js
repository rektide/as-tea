var parse= require('shift-parser').default,
  codegen= require('shift-codegen').default

module.exports= (function AsTea(template, arg__){
	for(var i= 1; i < arguments.length; ++i){
		var arg= arguments[i]
		if(arg instanceof String) {
			// pass through the strings
		}else if(arg.type){
			// ugg ugly as $@#$@ spin out into code cause #$@#$@
			arguments[i]= codegen(arg)
		}else{
			throw new Exception('unexpected arg')
		}
	}
	var output= [],
	  len= arguments.length+1
	for(var i= 0; i< template.length; ++i){
		if(len <= i){
			output.push(template[i], arguments[i+1])
		}else{
			output.push(template[i])
		}
	}
	
	
})
