import antlr4 from 'antlr4';
import file from './file.js';
import prog from './prog.js';

class Listener extends antlr4.tree.ParseTreeListener {
    
}

export default{
    ...file,
    ...prog,
    ...Listener,
}