var parse= require('shift-parser').default,
  codegen= require('shift-codegen').default

module.exports= (function AsTea(template, arg__){
	for(var i= 1; i < arguments.length; ++i){
		var arg= arguments[i]
		if(arg instanceof String) {
			arguments[i]= parse(codegen(arg)) // uggg would that for reals?
		}else if(arg.type){
			// this is cool someone knows wtf, has ast, gj
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
