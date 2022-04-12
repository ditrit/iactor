// Generated from hclParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import hclParserListener from './hclParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00034\u015e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0006\u0002P\n\u0002",
    "\r\u0002\u000e\u0002Q\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003Z\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0006\u0007m\n\u0007\r\u0007\u000e",
    "\u0007n\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u0092\n\u000e",
    "\r\u000e\u000e\u000e\u0093\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0006\u0012\u00a6\n\u0012\r\u0012\u000e\u0012\u00a7\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00d9\n",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0006",
    "\u001b\u00e0\n\u001b\r\u001b\u000e\u001b\u00e1\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u00e6\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0006",
    "\u001c\u00eb\n\u001c\r\u001c\u000e\u001c\u00ec\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0003!\u0006!\u0101\n!\r!\u000e!\u0102\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u010f",
    "\n\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0005#\u0117\n#\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0007$\u011e\n$\f$\u000e$\u0121\u000b",
    "$\u0003$\u0005$\u0124\n$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0006%\u012e\n%\r%\u000e%\u012f\u0006%\u0132\n%\r%\u000e%\u0133",
    "\u0003%\u0003%\u0005%\u0138\n%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0007%\u0145\n%\f%\u000e%\u0148",
    "\u000b%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0007&\u0150\n&\f",
    "&\u000e&\u0153\u000b&\u0003&\u0005&\u0156\n&\u0003&\u0003&\u0005&\u015a",
    "\n&\u0003\'\u0003\'\u0003\'\u0002\u0003H(\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJL\u0002\u0004\u0005\u0002\u000e\u000e\u0011\u0011((\u0004\u0002",
    "$$**\u0002\u016e\u0002O\u0003\u0002\u0002\u0002\u0004Y\u0003\u0002\u0002",
    "\u0002\u0006[\u0003\u0002\u0002\u0002\b_\u0003\u0002\u0002\u0002\nc",
    "\u0003\u0002\u0002\u0002\ff\u0003\u0002\u0002\u0002\u000er\u0003\u0002",
    "\u0002\u0002\u0010u\u0003\u0002\u0002\u0002\u0012y\u0003\u0002\u0002",
    "\u0002\u0014}\u0003\u0002\u0002\u0002\u0016\u0080\u0003\u0002\u0002",
    "\u0002\u0018\u0085\u0003\u0002\u0002\u0002\u001a\u0089\u0003\u0002\u0002",
    "\u0002\u001c\u0097\u0003\u0002\u0002\u0002\u001e\u009b\u0003\u0002\u0002",
    "\u0002 \u009d\u0003\u0002\u0002\u0002\"\u009f\u0003\u0002\u0002\u0002",
    "$\u00ab\u0003\u0002\u0002\u0002&\u00af\u0003\u0002\u0002\u0002(\u00b3",
    "\u0003\u0002\u0002\u0002*\u00b7\u0003\u0002\u0002\u0002,\u00bb\u0003",
    "\u0002\u0002\u0002.\u00bf\u0003\u0002\u0002\u00020\u00c3\u0003\u0002",
    "\u0002\u00022\u00d8\u0003\u0002\u0002\u00024\u00e5\u0003\u0002\u0002",
    "\u00026\u00e7\u0003\u0002\u0002\u00028\u00ee\u0003\u0002\u0002\u0002",
    ":\u00f1\u0003\u0002\u0002\u0002<\u00f5\u0003\u0002\u0002\u0002>\u00f9",
    "\u0003\u0002\u0002\u0002@\u00fc\u0003\u0002\u0002\u0002B\u010e\u0003",
    "\u0002\u0002\u0002D\u0116\u0003\u0002\u0002\u0002F\u0118\u0003\u0002",
    "\u0002\u0002H\u0137\u0003\u0002\u0002\u0002J\u0159\u0003\u0002\u0002",
    "\u0002L\u015b\u0003\u0002\u0002\u0002NP\u0005\u0004\u0003\u0002ON\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002",
    "QR\u0003\u0002\u0002\u0002R\u0003\u0003\u0002\u0002\u0002SZ\u0005\b",
    "\u0005\u0002TZ\u0005\n\u0006\u0002UZ\u0005\u0016\f\u0002VZ\u0005\u0018",
    "\r\u0002WZ\u0005\u001c\u000f\u0002XZ\u0005\u0006\u0004\u0002YS\u0003",
    "\u0002\u0002\u0002YT\u0003\u0002\u0002\u0002YU\u0003\u0002\u0002\u0002",
    "YV\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YX\u0003\u0002\u0002",
    "\u0002Z\u0005\u0003\u0002\u0002\u0002[\\\u0007\u0003\u0002\u0002\\]",
    "\u0005\u001e\u0010\u0002]^\u00054\u001b\u0002^\u0007\u0003\u0002\u0002",
    "\u0002_`\u0007\u0004\u0002\u0002`a\u0005\u001e\u0010\u0002ab\u00054",
    "\u001b\u0002b\t\u0003\u0002\u0002\u0002cd\u0007\u0005\u0002\u0002de",
    "\u0005\f\u0007\u0002e\u000b\u0003\u0002\u0002\u0002fl\u0007\u001a\u0002",
    "\u0002gm\u0005\u000e\b\u0002hm\u0005\u0010\t\u0002im\u0005\u0012\n\u0002",
    "jm\u0005\u0014\u000b\u0002km\u00054\u001b\u0002lg\u0003\u0002\u0002",
    "\u0002lh\u0003\u0002\u0002\u0002li\u0003\u0002\u0002\u0002lj\u0003\u0002",
    "\u0002\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nl\u0003",
    "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002",
    "pq\u0007\u001b\u0002\u0002q\r\u0003\u0002\u0002\u0002rs\u0007\u0006",
    "\u0002\u0002st\u00054\u001b\u0002t\u000f\u0003\u0002\u0002\u0002uv\u0007",
    "\u0007\u0002\u0002vw\u0005\u001e\u0010\u0002wx\u00054\u001b\u0002x\u0011",
    "\u0003\u0002\u0002\u0002yz\u0007\b\u0002\u0002z{\u0007\u001c\u0002\u0002",
    "{|\u0007)\u0002\u0002|\u0013\u0003\u0002\u0002\u0002}~\u0007\t\u0002",
    "\u0002~\u007f\u00054\u001b\u0002\u007f\u0015\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0007\n\u0002\u0002\u0081\u0082\u0005 \u0011\u0002\u0082",
    "\u0083\u0005\u001e\u0010\u0002\u0083\u0084\u00054\u001b\u0002\u0084",
    "\u0017\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u000b\u0002\u0002\u0086",
    "\u0087\u0005\u001e\u0010\u0002\u0087\u0088\u0005\u001a\u000e\u0002\u0088",
    "\u0019\u0003\u0002\u0002\u0002\u0089\u0091\u0007\u001a\u0002\u0002\u008a",
    "\u0092\u0005.\u0018\u0002\u008b\u0092\u0005:\u001e\u0002\u008c\u0092",
    "\u0005<\u001f\u0002\u008d\u0092\u0005> \u0002\u008e\u0092\u0005,\u0017",
    "\u0002\u008f\u0092\u00050\u0019\u0002\u0090\u0092\u00054\u001b\u0002",
    "\u0091\u008a\u0003\u0002\u0002\u0002\u0091\u008b\u0003\u0002\u0002\u0002",
    "\u0091\u008c\u0003\u0002\u0002\u0002\u0091\u008d\u0003\u0002\u0002\u0002",
    "\u0091\u008e\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002",
    "\u0091\u0090\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0007\u001b\u0002\u0002",
    "\u0096\u001b\u0003\u0002\u0002\u0002\u0097\u0098\u0007\f\u0002\u0002",
    "\u0098\u0099\u0005\u001e\u0010\u0002\u0099\u009a\u0005\"\u0012\u0002",
    "\u009a\u001d\u0003\u0002\u0002\u0002\u009b\u009c\u0007)\u0002\u0002",
    "\u009c\u001f\u0003\u0002\u0002\u0002\u009d\u009e\u0007)\u0002\u0002",
    "\u009e!\u0003\u0002\u0002\u0002\u009f\u00a5\u0007\u001a\u0002\u0002",
    "\u00a0\u00a6\u0005$\u0013\u0002\u00a1\u00a6\u0005&\u0014\u0002\u00a2",
    "\u00a6\u0005*\u0016\u0002\u00a3\u00a6\u0005(\u0015\u0002\u00a4\u00a6",
    "\u00054\u001b\u0002\u00a5\u00a0\u0003\u0002\u0002\u0002\u00a5\u00a1",
    "\u0003\u0002\u0002\u0002\u00a5\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a3",
    "\u0003\u0002\u0002\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7",
    "\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0007\u001b\u0002\u0002\u00aa#\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\u0007\r\u0002\u0002\u00ac\u00ad\u0007\u001c\u0002\u0002\u00ad\u00ae",
    "\u0005D#\u0002\u00ae%\u0003\u0002\u0002\u0002\u00af\u00b0\u0007\u000e",
    "\u0002\u0002\u00b0\u00b1\u0007\u001c\u0002\u0002\u00b1\u00b2\u0007)",
    "\u0002\u0002\u00b2\'\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\u000f",
    "\u0002\u0002\u00b4\u00b5\u0007\u001c\u0002\u0002\u00b5\u00b6\u0005J",
    "&\u0002\u00b6)\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007\u0010\u0002",
    "\u0002\u00b8\u00b9\u0007\u001c\u0002\u0002\u00b9\u00ba\u0007&\u0002",
    "\u0002\u00ba+\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007\u0010\u0002",
    "\u0002\u00bc\u00bd\u0007\u001c\u0002\u0002\u00bd\u00be\u0007&\u0002",
    "\u0002\u00be-\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\u0011\u0002",
    "\u0002\u00c0\u00c1\u0007\u001c\u0002\u0002\u00c1\u00c2\u00052\u001a",
    "\u0002\u00c2/\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0012\u0002",
    "\u0002\u00c4\u00c5\u0007\u001c\u0002\u0002\u00c5\u00c6\u0007&\u0002",
    "\u0002\u00c61\u0003\u0002\u0002\u0002\u00c7\u00d9\u0007\'\u0002\u0002",
    "\u00c8\u00d9\u0007\u0013\u0002\u0002\u00c9\u00ca\u0007\u0013\u0002\u0002",
    "\u00ca\u00cb\u0007\u001d\u0002\u0002\u00cb\u00cc\u00052\u001a\u0002",
    "\u00cc\u00cd\u0007\u001e\u0002\u0002\u00cd\u00d9\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0007\u0014\u0002\u0002\u00cf\u00d0\u0007\u001d\u0002\u0002",
    "\u00d0\u00d1\u00052\u001a\u0002\u00d1\u00d2\u0007\u001e\u0002\u0002",
    "\u00d2\u00d9\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007\u0015\u0002\u0002",
    "\u00d4\u00d5\u0007\u001d\u0002\u0002\u00d5\u00d6\u00054\u001b\u0002",
    "\u00d6\u00d7\u0007\u001e\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002\u0002",
    "\u00d8\u00c7\u0003\u0002\u0002\u0002\u00d8\u00c8\u0003\u0002\u0002\u0002",
    "\u00d8\u00c9\u0003\u0002\u0002\u0002\u00d8\u00ce\u0003\u0002\u0002\u0002",
    "\u00d8\u00d3\u0003\u0002\u0002\u0002\u00d93\u0003\u0002\u0002\u0002",
    "\u00da\u00db\u0007\u001a\u0002\u0002\u00db\u00e6\u0007\u001b\u0002\u0002",
    "\u00dc\u00df\u0007\u001a\u0002\u0002\u00dd\u00e0\u00058\u001d\u0002",
    "\u00de\u00e0\u00056\u001c\u0002\u00df\u00dd\u0003\u0002\u0002\u0002",
    "\u00df\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002",
    "\u00e1\u00df\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002",
    "\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007\u001b\u0002\u0002",
    "\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5\u00da\u0003\u0002\u0002\u0002",
    "\u00e5\u00dc\u0003\u0002\u0002\u0002\u00e65\u0003\u0002\u0002\u0002",
    "\u00e7\u00e8\t\u0002\u0002\u0002\u00e8\u00ea\u0007\u001c\u0002\u0002",
    "\u00e9\u00eb\u0005D#\u0002\u00ea\u00e9\u0003\u0002\u0002\u0002\u00eb",
    "\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0003\u0002\u0002\u0002\u00ed7\u0003\u0002\u0002\u0002\u00ee",
    "\u00ef\t\u0002\u0002\u0002\u00ef\u00f0\u00054\u001b\u0002\u00f09\u0003",
    "\u0002\u0002\u0002\u00f1\u00f2\u0007\u000e\u0002\u0002\u00f2\u00f3\u0007",
    "\u001c\u0002\u0002\u00f3\u00f4\u0007)\u0002\u0002\u00f4;\u0003\u0002",
    "\u0002\u0002\u00f5\u00f6\u0007\u0016\u0002\u0002\u00f6\u00f7\u0007\u001c",
    "\u0002\u0002\u00f7\u00f8\u0005D#\u0002\u00f8=\u0003\u0002\u0002\u0002",
    "\u00f9\u00fa\u0007\u0017\u0002\u0002\u00fa\u00fb\u0005@!\u0002\u00fb",
    "?\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007\u001a\u0002\u0002\u00fd",
    "\u00fe\u0007\u0018\u0002\u0002\u00fe\u0100\u0007\u001c\u0002\u0002\u00ff",
    "\u0101\u0005B\"\u0002\u0100\u00ff\u0003\u0002\u0002\u0002\u0101\u0102",
    "\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0103",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0105",
    "\u0007\u0019\u0002\u0002\u0105\u0106\u0007\u001c\u0002\u0002\u0106\u0107",
    "\u0007)\u0002\u0002\u0107\u0108\u0007\u001b\u0002\u0002\u0108A\u0003",
    "\u0002\u0002\u0002\u0109\u010f\u0007)\u0002\u0002\u010a\u010f\u0007",
    "*\u0002\u0002\u010b\u010f\u0007&\u0002\u0002\u010c\u010f\u0007%\u0002",
    "\u0002\u010d\u010f\u0005F$\u0002\u010e\u0109\u0003\u0002\u0002\u0002",
    "\u010e\u010a\u0003\u0002\u0002\u0002\u010e\u010b\u0003\u0002\u0002\u0002",
    "\u010e\u010c\u0003\u0002\u0002\u0002\u010e\u010d\u0003\u0002\u0002\u0002",
    "\u010fC\u0003\u0002\u0002\u0002\u0110\u0117\u0007*\u0002\u0002\u0111",
    "\u0117\u0007&\u0002\u0002\u0112\u0117\u0005J&\u0002\u0113\u0117\u0005",
    "4\u001b\u0002\u0114\u0117\u0005H%\u0002\u0115\u0117\u0007)\u0002\u0002",
    "\u0116\u0110\u0003\u0002\u0002\u0002\u0116\u0111\u0003\u0002\u0002\u0002",
    "\u0116\u0112\u0003\u0002\u0002\u0002\u0116\u0113\u0003\u0002\u0002\u0002",
    "\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0115\u0003\u0002\u0002\u0002",
    "\u0117E\u0003\u0002\u0002\u0002\u0118\u0119\u0007(\u0002\u0002\u0119",
    "\u011a\u0007\u001d\u0002\u0002\u011a\u011f\u0005D#\u0002\u011b\u011c",
    "\u0007!\u0002\u0002\u011c\u011e\u0005D#\u0002\u011d\u011b\u0003\u0002",
    "\u0002\u0002\u011e\u0121\u0003\u0002\u0002\u0002\u011f\u011d\u0003\u0002",
    "\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120\u0123\u0003\u0002",
    "\u0002\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0122\u0124\u0007!",
    "\u0002\u0002\u0123\u0122\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002",
    "\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0126\u0007\u001e",
    "\u0002\u0002\u0126G\u0003\u0002\u0002\u0002\u0127\u0128\b%\u0001\u0002",
    "\u0128\u0138\u0007(\u0002\u0002\u0129\u0131\u0007/\u0002\u0002\u012a",
    "\u0132\u00070\u0002\u0002\u012b\u0132\u00073\u0002\u0002\u012c\u012e",
    "\u00071\u0002\u0002\u012d\u012c\u0003\u0002\u0002\u0002\u012e\u012f",
    "\u0003\u0002\u0002\u0002\u012f\u012d\u0003\u0002\u0002\u0002\u012f\u0130",
    "\u0003\u0002\u0002\u0002\u0130\u0132\u0003\u0002\u0002\u0002\u0131\u012a",
    "\u0003\u0002\u0002\u0002\u0131\u012b\u0003\u0002\u0002\u0002\u0131\u012d",
    "\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0131",
    "\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u0135",
    "\u0003\u0002\u0002\u0002\u0135\u0138\u00074\u0002\u0002\u0136\u0138",
    "\u0005F$\u0002\u0137\u0127\u0003\u0002\u0002\u0002\u0137\u0129\u0003",
    "\u0002\u0002\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0138\u0146\u0003",
    "\u0002\u0002\u0002\u0139\u013a\f\u0007\u0002\u0002\u013a\u013b\u0007",
    "\"\u0002\u0002\u013b\u0145\u0005H%\b\u013c\u013d\f\u0006\u0002\u0002",
    "\u013d\u013e\u0007\u001f\u0002\u0002\u013e\u013f\u0005L\'\u0002\u013f",
    "\u0140\u0007 \u0002\u0002\u0140\u0145\u0003\u0002\u0002\u0002\u0141",
    "\u0142\f\u0005\u0002\u0002\u0142\u0143\u0007\"\u0002\u0002\u0143\u0145",
    "\u0005L\'\u0002\u0144\u0139\u0003\u0002\u0002\u0002\u0144\u013c\u0003",
    "\u0002\u0002\u0002\u0144\u0141\u0003\u0002\u0002\u0002\u0145\u0148\u0003",
    "\u0002\u0002\u0002\u0146\u0144\u0003\u0002\u0002\u0002\u0146\u0147\u0003",
    "\u0002\u0002\u0002\u0147I\u0003\u0002\u0002\u0002\u0148\u0146\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0007\u001f\u0002\u0002\u014a\u015a\u0007",
    " \u0002\u0002\u014b\u014c\u0007\u001f\u0002\u0002\u014c\u0151\u0005",
    "D#\u0002\u014d\u014e\u0007!\u0002\u0002\u014e\u0150\u0005D#\u0002\u014f",
    "\u014d\u0003\u0002\u0002\u0002\u0150\u0153\u0003\u0002\u0002\u0002\u0151",
    "\u014f\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002\u0152",
    "\u0155\u0003\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0154",
    "\u0156\u0007!\u0002\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0155",
    "\u0156\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157",
    "\u0158\u0007 \u0002\u0002\u0158\u015a\u0003\u0002\u0002\u0002\u0159",
    "\u0149\u0003\u0002\u0002\u0002\u0159\u014b\u0003\u0002\u0002\u0002\u015a",
    "K\u0003\u0002\u0002\u0002\u015b\u015c\t\u0003\u0002\u0002\u015cM\u0003",
    "\u0002\u0002\u0002\u001dQYln\u0091\u0093\u00a5\u00a7\u00d8\u00df\u00e1",
    "\u00e5\u00ec\u0102\u010e\u0116\u011f\u0123\u012f\u0131\u0133\u0137\u0144",
    "\u0146\u0151\u0155\u0159"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class hclParser extends antlr4.Parser {

    static grammarFileName = "hclParser.g4";
    static literalNames = [ null, "'module'", "'provider'", "'terraform'", 
                            "'cloud'", "'backend'", "'required_version'", 
                            "'required_providers'", "'resource'", "'variable'", 
                            "'output'", "'value'", "'description'", "'depends_on'", 
                            "'sensitive'", "'type'", "'nullable'", "'list'", 
                            "'map'", "'object'", "'default'", "'validation'", 
                            "'condition'", "'error_message'", "'{'", "'}'", 
                            "'='", "'('", "')'", "'['", "']'", "','", "'.'", 
                            "'-'", "'*'", null, null, null, null, null, 
                            null, null, null, null, null, "'<<EOF'", null, 
                            null, null, null, "'EOF'" ];
    static symbolicNames = [ null, "MODULE", "PROVIDER", "TERRAFORM", "CLOUD", 
                             "BACKEND", "VERSION", "PROVIDERS", "RESOURCE", 
                             "VARIABLE", "OUTPUT", "VALUE", "DESCRIPTION", 
                             "DEPENDSON", "SENSITIVE", "VARIABLETYPE", "NULLABLE", 
                             "LIST", "MAP", "OBJECT", "DEFAULT", "VALIDATION", 
                             "CONDITION", "ERROR", "AO", "AF", "EQUAL", 
                             "PO", "PF", "CO", "CF", "VIRG", "POINT", "TIRET", 
                             "MULT", "BOOLEANOP", "BOOLEAN", "TYPE", "IDENTIFIER", 
                             "STRING", "NUMBER", "COMMENT", "LINE_COMMENT", 
                             "HAS_COMMENT", "WS", "OPEN", "IDENTIFIERS", 
                             "WSS", "NUMBERS", "AUTRE", "CLOSE" ];
    static ruleNames = [ "file", "directive", "moduleDirective", "providerDirective", 
                         "terraformDirective", "terraformBlock", "terraformCloud", 
                         "terraformBackEnd", "terraformVersion", "terraformProviders", 
                         "resourceDirective", "variableDirective", "variableBlock", 
                         "outputDirective", "name", "resourceType", "outputBlock", 
                         "outputValue", "outputDescription", "outputDependsOn", 
                         "outputSensitive", "variableSensitive", "variableType", 
                         "variableNullabl", "type", "object", "field", "complexField", 
                         "variableDescription", "variableDefault", "variableValidation", 
                         "validation", "condition", "expression", "functionCall", 
                         "complexExpression", "array", "index" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = hclParser.ruleNames;
        this.literalNames = hclParser.literalNames;
        this.symbolicNames = hclParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 35:
    	    		return this.complexExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    complexExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, hclParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 76;
	            this.directive();
	            this.state = 79; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << hclParser.MODULE) | (1 << hclParser.PROVIDER) | (1 << hclParser.TERRAFORM) | (1 << hclParser.RESOURCE) | (1 << hclParser.VARIABLE) | (1 << hclParser.OUTPUT))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, hclParser.RULE_directive);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case hclParser.PROVIDER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.providerDirective();
	            break;
	        case hclParser.TERRAFORM:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.terraformDirective();
	            break;
	        case hclParser.RESOURCE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.resourceDirective();
	            break;
	        case hclParser.VARIABLE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 84;
	            this.variableDirective();
	            break;
	        case hclParser.OUTPUT:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 85;
	            this.outputDirective();
	            break;
	        case hclParser.MODULE:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 86;
	            this.moduleDirective();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moduleDirective() {
	    let localctx = new ModuleDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, hclParser.RULE_moduleDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(hclParser.MODULE);
	        this.state = 90;
	        this.name();
	        this.state = 91;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	providerDirective() {
	    let localctx = new ProviderDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, hclParser.RULE_providerDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(hclParser.PROVIDER);
	        this.state = 94;
	        this.name();
	        this.state = 95;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terraformDirective() {
	    let localctx = new TerraformDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, hclParser.RULE_terraformDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(hclParser.TERRAFORM);
	        this.state = 98;
	        this.terraformBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terraformBlock() {
	    let localctx = new TerraformBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, hclParser.RULE_terraformBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(hclParser.AO);
	        this.state = 106; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 106;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case hclParser.CLOUD:
	                this.state = 101;
	                this.terraformCloud();
	                break;
	            case hclParser.BACKEND:
	                this.state = 102;
	                this.terraformBackEnd();
	                break;
	            case hclParser.VERSION:
	                this.state = 103;
	                this.terraformVersion();
	                break;
	            case hclParser.PROVIDERS:
	                this.state = 104;
	                this.terraformProviders();
	                break;
	            case hclParser.AO:
	                this.state = 105;
	                this.object();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 108; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << hclParser.CLOUD) | (1 << hclParser.BACKEND) | (1 << hclParser.VERSION) | (1 << hclParser.PROVIDERS) | (1 << hclParser.AO))) !== 0));
	        this.state = 110;
	        this.match(hclParser.AF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terraformCloud() {
	    let localctx = new TerraformCloudContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, hclParser.RULE_terraformCloud);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(hclParser.CLOUD);
	        this.state = 113;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terraformBackEnd() {
	    let localctx = new TerraformBackEndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, hclParser.RULE_terraformBackEnd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(hclParser.BACKEND);
	        this.state = 116;
	        this.name();
	        this.state = 117;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terraformVersion() {
	    let localctx = new TerraformVersionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, hclParser.RULE_terraformVersion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(hclParser.VERSION);
	        this.state = 120;
	        this.match(hclParser.EQUAL);
	        this.state = 121;
	        this.match(hclParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terraformProviders() {
	    let localctx = new TerraformProvidersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, hclParser.RULE_terraformProviders);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(hclParser.PROVIDERS);
	        this.state = 124;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resourceDirective() {
	    let localctx = new ResourceDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, hclParser.RULE_resourceDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(hclParser.RESOURCE);
	        this.state = 127;
	        this.resourceType();
	        this.state = 128;
	        this.name();
	        this.state = 129;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDirective() {
	    let localctx = new VariableDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, hclParser.RULE_variableDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(hclParser.VARIABLE);
	        this.state = 132;
	        this.name();
	        this.state = 133;
	        this.variableBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableBlock() {
	    let localctx = new VariableBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, hclParser.RULE_variableBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(hclParser.AO);
	        this.state = 143; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 143;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case hclParser.VARIABLETYPE:
	                this.state = 136;
	                this.variableType();
	                break;
	            case hclParser.DESCRIPTION:
	                this.state = 137;
	                this.variableDescription();
	                break;
	            case hclParser.DEFAULT:
	                this.state = 138;
	                this.variableDefault();
	                break;
	            case hclParser.VALIDATION:
	                this.state = 139;
	                this.variableValidation();
	                break;
	            case hclParser.SENSITIVE:
	                this.state = 140;
	                this.variableSensitive();
	                break;
	            case hclParser.NULLABLE:
	                this.state = 141;
	                this.variableNullabl();
	                break;
	            case hclParser.AO:
	                this.state = 142;
	                this.object();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << hclParser.DESCRIPTION) | (1 << hclParser.SENSITIVE) | (1 << hclParser.VARIABLETYPE) | (1 << hclParser.NULLABLE) | (1 << hclParser.DEFAULT) | (1 << hclParser.VALIDATION) | (1 << hclParser.AO))) !== 0));
	        this.state = 147;
	        this.match(hclParser.AF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputDirective() {
	    let localctx = new OutputDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, hclParser.RULE_outputDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(hclParser.OUTPUT);
	        this.state = 150;
	        this.name();
	        this.state = 151;
	        this.outputBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, hclParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(hclParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resourceType() {
	    let localctx = new ResourceTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, hclParser.RULE_resourceType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(hclParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputBlock() {
	    let localctx = new OutputBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, hclParser.RULE_outputBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(hclParser.AO);
	        this.state = 163; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 163;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case hclParser.VALUE:
	                this.state = 158;
	                this.outputValue();
	                break;
	            case hclParser.DESCRIPTION:
	                this.state = 159;
	                this.outputDescription();
	                break;
	            case hclParser.SENSITIVE:
	                this.state = 160;
	                this.outputSensitive();
	                break;
	            case hclParser.DEPENDSON:
	                this.state = 161;
	                this.outputDependsOn();
	                break;
	            case hclParser.AO:
	                this.state = 162;
	                this.object();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 165; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << hclParser.VALUE) | (1 << hclParser.DESCRIPTION) | (1 << hclParser.DEPENDSON) | (1 << hclParser.SENSITIVE) | (1 << hclParser.AO))) !== 0));
	        this.state = 167;
	        this.match(hclParser.AF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputValue() {
	    let localctx = new OutputValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, hclParser.RULE_outputValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(hclParser.VALUE);
	        this.state = 170;
	        this.match(hclParser.EQUAL);
	        this.state = 171;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputDescription() {
	    let localctx = new OutputDescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, hclParser.RULE_outputDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(hclParser.DESCRIPTION);
	        this.state = 174;
	        this.match(hclParser.EQUAL);
	        this.state = 175;
	        this.match(hclParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputDependsOn() {
	    let localctx = new OutputDependsOnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, hclParser.RULE_outputDependsOn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(hclParser.DEPENDSON);
	        this.state = 178;
	        this.match(hclParser.EQUAL);
	        this.state = 179;
	        this.array();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputSensitive() {
	    let localctx = new OutputSensitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, hclParser.RULE_outputSensitive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(hclParser.SENSITIVE);
	        this.state = 182;
	        this.match(hclParser.EQUAL);
	        this.state = 183;
	        this.match(hclParser.BOOLEAN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableSensitive() {
	    let localctx = new VariableSensitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, hclParser.RULE_variableSensitive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(hclParser.SENSITIVE);
	        this.state = 186;
	        this.match(hclParser.EQUAL);
	        this.state = 187;
	        this.match(hclParser.BOOLEAN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableType() {
	    let localctx = new VariableTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, hclParser.RULE_variableType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(hclParser.VARIABLETYPE);
	        this.state = 190;
	        this.match(hclParser.EQUAL);
	        this.state = 191;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableNullabl() {
	    let localctx = new VariableNullablContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, hclParser.RULE_variableNullabl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(hclParser.NULLABLE);
	        this.state = 194;
	        this.match(hclParser.EQUAL);
	        this.state = 195;
	        this.match(hclParser.BOOLEAN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, hclParser.RULE_type);
	    try {
	        this.state = 214;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.match(hclParser.TYPE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.match(hclParser.LIST);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 199;
	            this.match(hclParser.LIST);
	            this.state = 200;
	            this.match(hclParser.PO);
	            this.state = 201;
	            this.type();
	            this.state = 202;
	            this.match(hclParser.PF);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 204;
	            this.match(hclParser.MAP);
	            this.state = 205;
	            this.match(hclParser.PO);
	            this.state = 206;
	            this.type();
	            this.state = 207;
	            this.match(hclParser.PF);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 209;
	            this.match(hclParser.OBJECT);
	            this.state = 210;
	            this.match(hclParser.PO);
	            this.state = 211;
	            this.object();
	            this.state = 212;
	            this.match(hclParser.PF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, hclParser.RULE_object);
	    var _la = 0; // Token type
	    try {
	        this.state = 227;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 216;
	            this.match(hclParser.AO);
	            this.state = 217;
	            this.match(hclParser.AF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 218;
	            this.match(hclParser.AO);
	            this.state = 221; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 221;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 219;
	                    this.complexField();
	                    break;

	                case 2:
	                    this.state = 220;
	                    this.field();
	                    break;

	                }
	                this.state = 223; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (hclParser.DESCRIPTION - 12)) | (1 << (hclParser.VARIABLETYPE - 12)) | (1 << (hclParser.IDENTIFIER - 12)))) !== 0));
	            this.state = 225;
	            this.match(hclParser.AF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, hclParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        _la = this._input.LA(1);
	        if(!(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (hclParser.DESCRIPTION - 12)) | (1 << (hclParser.VARIABLETYPE - 12)) | (1 << (hclParser.IDENTIFIER - 12)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 230;
	        this.match(hclParser.EQUAL);
	        this.state = 232; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 231;
	        		this.expression();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 234; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	complexField() {
	    let localctx = new ComplexFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, hclParser.RULE_complexField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        _la = this._input.LA(1);
	        if(!(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (hclParser.DESCRIPTION - 12)) | (1 << (hclParser.VARIABLETYPE - 12)) | (1 << (hclParser.IDENTIFIER - 12)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 237;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDescription() {
	    let localctx = new VariableDescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, hclParser.RULE_variableDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(hclParser.DESCRIPTION);
	        this.state = 240;
	        this.match(hclParser.EQUAL);
	        this.state = 241;
	        this.match(hclParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDefault() {
	    let localctx = new VariableDefaultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, hclParser.RULE_variableDefault);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(hclParser.DEFAULT);
	        this.state = 244;
	        this.match(hclParser.EQUAL);
	        this.state = 245;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableValidation() {
	    let localctx = new VariableValidationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, hclParser.RULE_variableValidation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(hclParser.VALIDATION);
	        this.state = 248;
	        this.validation();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	validation() {
	    let localctx = new ValidationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, hclParser.RULE_validation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(hclParser.AO);
	        this.state = 251;
	        this.match(hclParser.CONDITION);
	        this.state = 252;
	        this.match(hclParser.EQUAL);
	        this.state = 254; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 253;
	            this.condition();
	            this.state = 256; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (hclParser.BOOLEANOP - 35)) | (1 << (hclParser.BOOLEAN - 35)) | (1 << (hclParser.IDENTIFIER - 35)) | (1 << (hclParser.STRING - 35)) | (1 << (hclParser.NUMBER - 35)))) !== 0));
	        this.state = 258;
	        this.match(hclParser.ERROR);
	        this.state = 259;
	        this.match(hclParser.EQUAL);
	        this.state = 260;
	        this.match(hclParser.STRING);
	        this.state = 261;
	        this.match(hclParser.AF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, hclParser.RULE_condition);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case hclParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 263;
	            this.match(hclParser.STRING);
	            break;
	        case hclParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.match(hclParser.NUMBER);
	            break;
	        case hclParser.BOOLEAN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 265;
	            this.match(hclParser.BOOLEAN);
	            break;
	        case hclParser.BOOLEANOP:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 266;
	            this.match(hclParser.BOOLEANOP);
	            break;
	        case hclParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 267;
	            this.functionCall();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, hclParser.RULE_expression);
	    try {
	        this.state = 276;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case hclParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 270;
	            this.match(hclParser.NUMBER);
	            break;
	        case hclParser.BOOLEAN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 271;
	            this.match(hclParser.BOOLEAN);
	            break;
	        case hclParser.CO:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.array();
	            break;
	        case hclParser.AO:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 273;
	            this.object();
	            break;
	        case hclParser.IDENTIFIER:
	        case hclParser.OPEN:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 274;
	            this.complexExpression(0);
	            break;
	        case hclParser.STRING:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 275;
	            this.match(hclParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, hclParser.RULE_functionCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(hclParser.IDENTIFIER);
	        this.state = 279;
	        this.match(hclParser.PO);
	        this.state = 280;
	        this.expression();
	        this.state = 285;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 281;
	                this.match(hclParser.VIRG);
	                this.state = 282;
	                this.expression(); 
	            }
	            this.state = 287;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===hclParser.VIRG) {
	            this.state = 288;
	            this.match(hclParser.VIRG);
	        }

	        this.state = 291;
	        this.match(hclParser.PF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	complexExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ComplexExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 70;
	    this.enterRecursionRule(localctx, 70, hclParser.RULE_complexExpression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 294;
	            this.match(hclParser.IDENTIFIER);
	            break;

	        case 2:
	            this.state = 295;
	            this.match(hclParser.OPEN);
	            this.state = 303; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 303;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case hclParser.IDENTIFIERS:
	                    this.state = 296;
	                    this.match(hclParser.IDENTIFIERS);
	                    break;
	                case hclParser.AUTRE:
	                    this.state = 297;
	                    this.match(hclParser.AUTRE);
	                    break;
	                case hclParser.WSS:
	                    this.state = 299; 
	                    this._errHandler.sync(this);
	                    var _alt = 1;
	                    do {
	                    	switch (_alt) {
	                    	case 1:
	                    		this.state = 298;
	                    		this.match(hclParser.WSS);
	                    		break;
	                    	default:
	                    		throw new antlr4.error.NoViableAltException(this);
	                    	}
	                    	this.state = 301; 
	                    	this._errHandler.sync(this);
	                    	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
	                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 305; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (hclParser.IDENTIFIERS - 46)) | (1 << (hclParser.WSS - 46)) | (1 << (hclParser.AUTRE - 46)))) !== 0));
	            this.state = 307;
	            this.match(hclParser.CLOSE);
	            break;

	        case 3:
	            this.state = 308;
	            this.functionCall();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 324;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 322;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComplexExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, hclParser.RULE_complexExpression);
	                    this.state = 311;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 312;
	                    this.match(hclParser.POINT);
	                    this.state = 313;
	                    this.complexExpression(6);
	                    break;

	                case 2:
	                    localctx = new ComplexExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, hclParser.RULE_complexExpression);
	                    this.state = 314;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 315;
	                    this.match(hclParser.CO);
	                    this.state = 316;
	                    this.index();
	                    this.state = 317;
	                    this.match(hclParser.CF);
	                    break;

	                case 3:
	                    localctx = new ComplexExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, hclParser.RULE_complexExpression);
	                    this.state = 319;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 320;
	                    this.match(hclParser.POINT);
	                    this.state = 321;
	                    this.index();
	                    break;

	                } 
	            }
	            this.state = 326;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, hclParser.RULE_array);
	    var _la = 0; // Token type
	    try {
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.match(hclParser.CO);
	            this.state = 328;
	            this.match(hclParser.CF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.match(hclParser.CO);
	            this.state = 330;
	            this.expression();
	            this.state = 335;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 331;
	                    this.match(hclParser.VIRG);
	                    this.state = 332;
	                    this.expression(); 
	                }
	                this.state = 337;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===hclParser.VIRG) {
	                this.state = 338;
	                this.match(hclParser.VIRG);
	            }

	            this.state = 341;
	            this.match(hclParser.CF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, hclParser.RULE_index);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        _la = this._input.LA(1);
	        if(!(_la===hclParser.MULT || _la===hclParser.NUMBER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

hclParser.EOF = antlr4.Token.EOF;
hclParser.MODULE = 1;
hclParser.PROVIDER = 2;
hclParser.TERRAFORM = 3;
hclParser.CLOUD = 4;
hclParser.BACKEND = 5;
hclParser.VERSION = 6;
hclParser.PROVIDERS = 7;
hclParser.RESOURCE = 8;
hclParser.VARIABLE = 9;
hclParser.OUTPUT = 10;
hclParser.VALUE = 11;
hclParser.DESCRIPTION = 12;
hclParser.DEPENDSON = 13;
hclParser.SENSITIVE = 14;
hclParser.VARIABLETYPE = 15;
hclParser.NULLABLE = 16;
hclParser.LIST = 17;
hclParser.MAP = 18;
hclParser.OBJECT = 19;
hclParser.DEFAULT = 20;
hclParser.VALIDATION = 21;
hclParser.CONDITION = 22;
hclParser.ERROR = 23;
hclParser.AO = 24;
hclParser.AF = 25;
hclParser.EQUAL = 26;
hclParser.PO = 27;
hclParser.PF = 28;
hclParser.CO = 29;
hclParser.CF = 30;
hclParser.VIRG = 31;
hclParser.POINT = 32;
hclParser.TIRET = 33;
hclParser.MULT = 34;
hclParser.BOOLEANOP = 35;
hclParser.BOOLEAN = 36;
hclParser.TYPE = 37;
hclParser.IDENTIFIER = 38;
hclParser.STRING = 39;
hclParser.NUMBER = 40;
hclParser.COMMENT = 41;
hclParser.LINE_COMMENT = 42;
hclParser.HAS_COMMENT = 43;
hclParser.WS = 44;
hclParser.OPEN = 45;
hclParser.IDENTIFIERS = 46;
hclParser.WSS = 47;
hclParser.NUMBERS = 48;
hclParser.AUTRE = 49;
hclParser.CLOSE = 50;

hclParser.RULE_file = 0;
hclParser.RULE_directive = 1;
hclParser.RULE_moduleDirective = 2;
hclParser.RULE_providerDirective = 3;
hclParser.RULE_terraformDirective = 4;
hclParser.RULE_terraformBlock = 5;
hclParser.RULE_terraformCloud = 6;
hclParser.RULE_terraformBackEnd = 7;
hclParser.RULE_terraformVersion = 8;
hclParser.RULE_terraformProviders = 9;
hclParser.RULE_resourceDirective = 10;
hclParser.RULE_variableDirective = 11;
hclParser.RULE_variableBlock = 12;
hclParser.RULE_outputDirective = 13;
hclParser.RULE_name = 14;
hclParser.RULE_resourceType = 15;
hclParser.RULE_outputBlock = 16;
hclParser.RULE_outputValue = 17;
hclParser.RULE_outputDescription = 18;
hclParser.RULE_outputDependsOn = 19;
hclParser.RULE_outputSensitive = 20;
hclParser.RULE_variableSensitive = 21;
hclParser.RULE_variableType = 22;
hclParser.RULE_variableNullabl = 23;
hclParser.RULE_type = 24;
hclParser.RULE_object = 25;
hclParser.RULE_field = 26;
hclParser.RULE_complexField = 27;
hclParser.RULE_variableDescription = 28;
hclParser.RULE_variableDefault = 29;
hclParser.RULE_variableValidation = 30;
hclParser.RULE_validation = 31;
hclParser.RULE_condition = 32;
hclParser.RULE_expression = 33;
hclParser.RULE_functionCall = 34;
hclParser.RULE_complexExpression = 35;
hclParser.RULE_array = 36;
hclParser.RULE_index = 37;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_file;
    }

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitFile(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_directive;
    }

	providerDirective() {
	    return this.getTypedRuleContext(ProviderDirectiveContext,0);
	};

	terraformDirective() {
	    return this.getTypedRuleContext(TerraformDirectiveContext,0);
	};

	resourceDirective() {
	    return this.getTypedRuleContext(ResourceDirectiveContext,0);
	};

	variableDirective() {
	    return this.getTypedRuleContext(VariableDirectiveContext,0);
	};

	outputDirective() {
	    return this.getTypedRuleContext(OutputDirectiveContext,0);
	};

	moduleDirective() {
	    return this.getTypedRuleContext(ModuleDirectiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitDirective(this);
		}
	}


}



class ModuleDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_moduleDirective;
    }

	MODULE() {
	    return this.getToken(hclParser.MODULE, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterModuleDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitModuleDirective(this);
		}
	}


}



class ProviderDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_providerDirective;
    }

	PROVIDER() {
	    return this.getToken(hclParser.PROVIDER, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterProviderDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitProviderDirective(this);
		}
	}


}



class TerraformDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_terraformDirective;
    }

	TERRAFORM() {
	    return this.getToken(hclParser.TERRAFORM, 0);
	};

	terraformBlock() {
	    return this.getTypedRuleContext(TerraformBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterTerraformDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitTerraformDirective(this);
		}
	}


}



class TerraformBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_terraformBlock;
    }

	AO() {
	    return this.getToken(hclParser.AO, 0);
	};

	AF() {
	    return this.getToken(hclParser.AF, 0);
	};

	terraformCloud = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerraformCloudContext);
	    } else {
	        return this.getTypedRuleContext(TerraformCloudContext,i);
	    }
	};

	terraformBackEnd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerraformBackEndContext);
	    } else {
	        return this.getTypedRuleContext(TerraformBackEndContext,i);
	    }
	};

	terraformVersion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerraformVersionContext);
	    } else {
	        return this.getTypedRuleContext(TerraformVersionContext,i);
	    }
	};

	terraformProviders = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerraformProvidersContext);
	    } else {
	        return this.getTypedRuleContext(TerraformProvidersContext,i);
	    }
	};

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterTerraformBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitTerraformBlock(this);
		}
	}


}



class TerraformCloudContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_terraformCloud;
    }

	CLOUD() {
	    return this.getToken(hclParser.CLOUD, 0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterTerraformCloud(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitTerraformCloud(this);
		}
	}


}



class TerraformBackEndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_terraformBackEnd;
    }

	BACKEND() {
	    return this.getToken(hclParser.BACKEND, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterTerraformBackEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitTerraformBackEnd(this);
		}
	}


}



class TerraformVersionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_terraformVersion;
    }

	VERSION() {
	    return this.getToken(hclParser.VERSION, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterTerraformVersion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitTerraformVersion(this);
		}
	}


}



class TerraformProvidersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_terraformProviders;
    }

	PROVIDERS() {
	    return this.getToken(hclParser.PROVIDERS, 0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterTerraformProviders(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitTerraformProviders(this);
		}
	}


}



class ResourceDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_resourceDirective;
    }

	RESOURCE() {
	    return this.getToken(hclParser.RESOURCE, 0);
	};

	resourceType() {
	    return this.getTypedRuleContext(ResourceTypeContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterResourceDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitResourceDirective(this);
		}
	}


}



class VariableDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableDirective;
    }

	VARIABLE() {
	    return this.getToken(hclParser.VARIABLE, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	variableBlock() {
	    return this.getTypedRuleContext(VariableBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableDirective(this);
		}
	}


}



class VariableBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableBlock;
    }

	AO() {
	    return this.getToken(hclParser.AO, 0);
	};

	AF() {
	    return this.getToken(hclParser.AF, 0);
	};

	variableType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableTypeContext);
	    } else {
	        return this.getTypedRuleContext(VariableTypeContext,i);
	    }
	};

	variableDescription = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDescriptionContext);
	    } else {
	        return this.getTypedRuleContext(VariableDescriptionContext,i);
	    }
	};

	variableDefault = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDefaultContext);
	    } else {
	        return this.getTypedRuleContext(VariableDefaultContext,i);
	    }
	};

	variableValidation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableValidationContext);
	    } else {
	        return this.getTypedRuleContext(VariableValidationContext,i);
	    }
	};

	variableSensitive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableSensitiveContext);
	    } else {
	        return this.getTypedRuleContext(VariableSensitiveContext,i);
	    }
	};

	variableNullabl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableNullablContext);
	    } else {
	        return this.getTypedRuleContext(VariableNullablContext,i);
	    }
	};

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableBlock(this);
		}
	}


}



class OutputDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputDirective;
    }

	OUTPUT() {
	    return this.getToken(hclParser.OUTPUT, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	outputBlock() {
	    return this.getTypedRuleContext(OutputBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterOutputDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitOutputDirective(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_name;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitName(this);
		}
	}


}



class ResourceTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_resourceType;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterResourceType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitResourceType(this);
		}
	}


}



class OutputBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputBlock;
    }

	AO() {
	    return this.getToken(hclParser.AO, 0);
	};

	AF() {
	    return this.getToken(hclParser.AF, 0);
	};

	outputValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputValueContext);
	    } else {
	        return this.getTypedRuleContext(OutputValueContext,i);
	    }
	};

	outputDescription = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputDescriptionContext);
	    } else {
	        return this.getTypedRuleContext(OutputDescriptionContext,i);
	    }
	};

	outputSensitive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputSensitiveContext);
	    } else {
	        return this.getTypedRuleContext(OutputSensitiveContext,i);
	    }
	};

	outputDependsOn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputDependsOnContext);
	    } else {
	        return this.getTypedRuleContext(OutputDependsOnContext,i);
	    }
	};

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterOutputBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitOutputBlock(this);
		}
	}


}



class OutputValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputValue;
    }

	VALUE() {
	    return this.getToken(hclParser.VALUE, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterOutputValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitOutputValue(this);
		}
	}


}



class OutputDescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputDescription;
    }

	DESCRIPTION() {
	    return this.getToken(hclParser.DESCRIPTION, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterOutputDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitOutputDescription(this);
		}
	}


}



class OutputDependsOnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputDependsOn;
    }

	DEPENDSON() {
	    return this.getToken(hclParser.DEPENDSON, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterOutputDependsOn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitOutputDependsOn(this);
		}
	}


}



class OutputSensitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputSensitive;
    }

	SENSITIVE() {
	    return this.getToken(hclParser.SENSITIVE, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	BOOLEAN() {
	    return this.getToken(hclParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterOutputSensitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitOutputSensitive(this);
		}
	}


}



class VariableSensitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableSensitive;
    }

	SENSITIVE() {
	    return this.getToken(hclParser.SENSITIVE, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	BOOLEAN() {
	    return this.getToken(hclParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableSensitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableSensitive(this);
		}
	}


}



class VariableTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableType;
    }

	VARIABLETYPE() {
	    return this.getToken(hclParser.VARIABLETYPE, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableType(this);
		}
	}


}



class VariableNullablContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableNullabl;
    }

	NULLABLE() {
	    return this.getToken(hclParser.NULLABLE, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	BOOLEAN() {
	    return this.getToken(hclParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableNullabl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableNullabl(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_type;
    }

	TYPE() {
	    return this.getToken(hclParser.TYPE, 0);
	};

	LIST() {
	    return this.getToken(hclParser.LIST, 0);
	};

	PO() {
	    return this.getToken(hclParser.PO, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	PF() {
	    return this.getToken(hclParser.PF, 0);
	};

	MAP() {
	    return this.getToken(hclParser.MAP, 0);
	};

	OBJECT() {
	    return this.getToken(hclParser.OBJECT, 0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitType(this);
		}
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_object;
    }

	AO() {
	    return this.getToken(hclParser.AO, 0);
	};

	AF() {
	    return this.getToken(hclParser.AF, 0);
	};

	complexField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComplexFieldContext);
	    } else {
	        return this.getTypedRuleContext(ComplexFieldContext,i);
	    }
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitObject(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_field;
    }

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	VARIABLETYPE() {
	    return this.getToken(hclParser.VARIABLETYPE, 0);
	};

	DESCRIPTION() {
	    return this.getToken(hclParser.DESCRIPTION, 0);
	};

	IDENTIFIER() {
	    return this.getToken(hclParser.IDENTIFIER, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitField(this);
		}
	}


}



class ComplexFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_complexField;
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	VARIABLETYPE() {
	    return this.getToken(hclParser.VARIABLETYPE, 0);
	};

	DESCRIPTION() {
	    return this.getToken(hclParser.DESCRIPTION, 0);
	};

	IDENTIFIER() {
	    return this.getToken(hclParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterComplexField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitComplexField(this);
		}
	}


}



class VariableDescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableDescription;
    }

	DESCRIPTION() {
	    return this.getToken(hclParser.DESCRIPTION, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableDescription(this);
		}
	}


}



class VariableDefaultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableDefault;
    }

	DEFAULT() {
	    return this.getToken(hclParser.DEFAULT, 0);
	};

	EQUAL() {
	    return this.getToken(hclParser.EQUAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableDefault(this);
		}
	}


}



class VariableValidationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableValidation;
    }

	VALIDATION() {
	    return this.getToken(hclParser.VALIDATION, 0);
	};

	validation() {
	    return this.getTypedRuleContext(ValidationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterVariableValidation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitVariableValidation(this);
		}
	}


}



class ValidationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_validation;
    }

	AO() {
	    return this.getToken(hclParser.AO, 0);
	};

	CONDITION() {
	    return this.getToken(hclParser.CONDITION, 0);
	};

	EQUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(hclParser.EQUAL);
	    } else {
	        return this.getToken(hclParser.EQUAL, i);
	    }
	};


	ERROR() {
	    return this.getToken(hclParser.ERROR, 0);
	};

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	AF() {
	    return this.getToken(hclParser.AF, 0);
	};

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterValidation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitValidation(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_condition;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(hclParser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(hclParser.BOOLEAN, 0);
	};

	BOOLEANOP() {
	    return this.getToken(hclParser.BOOLEANOP, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitCondition(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_expression;
    }

	NUMBER() {
	    return this.getToken(hclParser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(hclParser.BOOLEAN, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	complexExpression() {
	    return this.getTypedRuleContext(ComplexExpressionContext,0);
	};

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_functionCall;
    }

	IDENTIFIER() {
	    return this.getToken(hclParser.IDENTIFIER, 0);
	};

	PO() {
	    return this.getToken(hclParser.PO, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	PF() {
	    return this.getToken(hclParser.PF, 0);
	};

	VIRG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(hclParser.VIRG);
	    } else {
	        return this.getToken(hclParser.VIRG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class ComplexExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_complexExpression;
    }

	IDENTIFIER() {
	    return this.getToken(hclParser.IDENTIFIER, 0);
	};

	OPEN() {
	    return this.getToken(hclParser.OPEN, 0);
	};

	CLOSE() {
	    return this.getToken(hclParser.CLOSE, 0);
	};

	IDENTIFIERS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(hclParser.IDENTIFIERS);
	    } else {
	        return this.getToken(hclParser.IDENTIFIERS, i);
	    }
	};


	AUTRE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(hclParser.AUTRE);
	    } else {
	        return this.getToken(hclParser.AUTRE, i);
	    }
	};


	WSS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(hclParser.WSS);
	    } else {
	        return this.getToken(hclParser.WSS, i);
	    }
	};


	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	complexExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComplexExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ComplexExpressionContext,i);
	    }
	};

	POINT() {
	    return this.getToken(hclParser.POINT, 0);
	};

	CO() {
	    return this.getToken(hclParser.CO, 0);
	};

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	CF() {
	    return this.getToken(hclParser.CF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterComplexExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitComplexExpression(this);
		}
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_array;
    }

	CO() {
	    return this.getToken(hclParser.CO, 0);
	};

	CF() {
	    return this.getToken(hclParser.CF, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	VIRG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(hclParser.VIRG);
	    } else {
	        return this.getToken(hclParser.VIRG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitArray(this);
		}
	}


}



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_index;
    }

	NUMBER() {
	    return this.getToken(hclParser.NUMBER, 0);
	};

	MULT() {
	    return this.getToken(hclParser.MULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclParserListener ) {
	        listener.exitIndex(this);
		}
	}


}




hclParser.FileContext = FileContext; 
hclParser.DirectiveContext = DirectiveContext; 
hclParser.ModuleDirectiveContext = ModuleDirectiveContext; 
hclParser.ProviderDirectiveContext = ProviderDirectiveContext; 
hclParser.TerraformDirectiveContext = TerraformDirectiveContext; 
hclParser.TerraformBlockContext = TerraformBlockContext; 
hclParser.TerraformCloudContext = TerraformCloudContext; 
hclParser.TerraformBackEndContext = TerraformBackEndContext; 
hclParser.TerraformVersionContext = TerraformVersionContext; 
hclParser.TerraformProvidersContext = TerraformProvidersContext; 
hclParser.ResourceDirectiveContext = ResourceDirectiveContext; 
hclParser.VariableDirectiveContext = VariableDirectiveContext; 
hclParser.VariableBlockContext = VariableBlockContext; 
hclParser.OutputDirectiveContext = OutputDirectiveContext; 
hclParser.NameContext = NameContext; 
hclParser.ResourceTypeContext = ResourceTypeContext; 
hclParser.OutputBlockContext = OutputBlockContext; 
hclParser.OutputValueContext = OutputValueContext; 
hclParser.OutputDescriptionContext = OutputDescriptionContext; 
hclParser.OutputDependsOnContext = OutputDependsOnContext; 
hclParser.OutputSensitiveContext = OutputSensitiveContext; 
hclParser.VariableSensitiveContext = VariableSensitiveContext; 
hclParser.VariableTypeContext = VariableTypeContext; 
hclParser.VariableNullablContext = VariableNullablContext; 
hclParser.TypeContext = TypeContext; 
hclParser.ObjectContext = ObjectContext; 
hclParser.FieldContext = FieldContext; 
hclParser.ComplexFieldContext = ComplexFieldContext; 
hclParser.VariableDescriptionContext = VariableDescriptionContext; 
hclParser.VariableDefaultContext = VariableDefaultContext; 
hclParser.VariableValidationContext = VariableValidationContext; 
hclParser.ValidationContext = ValidationContext; 
hclParser.ConditionContext = ConditionContext; 
hclParser.ExpressionContext = ExpressionContext; 
hclParser.FunctionCallContext = FunctionCallContext; 
hclParser.ComplexExpressionContext = ComplexExpressionContext; 
hclParser.ArrayContext = ArrayContext; 
hclParser.IndexContext = IndexContext; 
