import file from './file.js'
import prog from './prog.js'
import antlr4 from 'antlr4';

class Listener extends antlr4.tree.ParseTreeListener {
    
}

export default{
    ...file,
    ...prog,
    ...Listener,
}