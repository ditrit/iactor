// Generated from hclLexer.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

const serializedATN = ['\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786',
  '\u5964\u0002*\u01a4\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003',
  '\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006',
  '\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b',
  '\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f',
  '\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013',
  '\t\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016',
  '\u0004\u0017\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a',
  '\t\u001a\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d',
  '\u0004\u001e\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004"',
  "\t\"\u0004#\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004",
  ')\t)\u0004*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0004',
  '0\t0\u00041\t1\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003',
  '\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003',
  '\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003',
  '\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003',
  '\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003',
  '\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003',
  '\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003',
  '\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003',
  '\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003',
  '\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003',
  '\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b',
  '\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f',
  '\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003',
  '\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e',
  '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e',
  '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010',
  '\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013',
  '\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016',
  '\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019',
  '\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a',
  '\u0003\u001a\u0003\u001a\u0005\u001a\u00e9\n\u001a\u0003\u001b\u0003',
  '\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003',
  '\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003',
  '\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003',
  '\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0101\n\u001b\u0003\u001c',
  '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c',
  '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c',
  '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c',
  '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c',
  '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c',
  '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c',
  '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u012c\n',
  '\u001c\u0003\u001d\u0003\u001d\u0007\u001d\u0130\n\u001d\f\u001d\u000e',
  '\u001d\u0133\u000b\u001d\u0003\u001e\u0003\u001e\u0005\u001e\u0137\n',
  '\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u013d',
  '\n\u001f\u0003 \u0003 \u0003 \u0007 \u0142\n \f \u000e \u0145\u000b',
  ' \u0003 \u0003 \u0003!\u0003!\u0003!\u0005!\u014c\n!\u0003"\u0003"',
  '\u0003"\u0003"\u0003"\u0003"\u0003#\u0003#\u0003$\u0003$\u0003%',
  '\u0003%\u0003%\u0007%\u015b\n%\f%\u000e%\u015e\u000b%\u0005%\u0160\n',
  '%\u0003&\u0003&\u0003&\u0003&\u0007&\u0166\n&\f&\u000e&\u0169\u000b',
  "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'",
  "\u0007\'\u0174\n\'\f\'\u000e\'\u0177\u000b\'\u0003\'\u0003\'\u0003(",
  '\u0003(\u0007(\u017d\n(\f(\u000e(\u0180\u000b(\u0003(\u0003(\u0003)',
  '\u0006)\u0185\n)\r)\u000e)\u0186\u0003)\u0003)\u0003*\u0003*\u0003*',
  '\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003',
  '-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u00031\u00031\u0003',
  '1\u00031\u00031\u00031\u0003\u0167\u00022\u0004\u0003\u0006\u0004\b',
  '\u0005\n\u0006\f\u0007\u000e\b\u0010\t\u0012\n\u0014\u000b\u0016\f\u0018',
  '\r\u001a\u000e\u001c\u000f\u001e\u0010 \u0011"\u0012$\u0013&\u0014',
  '(\u0015*\u0016,\u0017.\u00180\u00192\u001a4\u001b6\u001c8\u001d:\u001e',
  "<\u0002>\u0002@\u001fB\u0002D\u0002F\u0002H\u0002J L!N\"P#R$T%V&X\'",
  'Z\u0002\\\u0002^(`)b*\u0004\u0002\u0003\u0011\u0006\u0002((>>@@~~\u0004',
  '\u0002--11\u0003\u00022;\u0007\u0002&&00C\\aac|\u0004\u0002\u0002\u0081',
  '\ud802\udc01\u0003\u0002\ud802\udc01\u0003\u0002\udc02\ue001\n\u0002',
  '$$11^^ddhhppttvv\u0005\u00022;CHch\u0005\u0002\u0002!$$^^\u0003\u0002',
  '3;\u0004\u0002\f\f\u000f\u000f\u0005\u0002\u000b\f\u000f\u000f""\u0003',
  '\u0002c|\b\u0002#&/1??aa}}\u007f\u007f\u0002\u01b5\u0002\u0004\u0003',
  '\u0002\u0002\u0002\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003',
  '\u0002\u0002\u0002\u0002\n\u0003\u0002\u0002\u0002\u0002\f\u0003\u0002',
  '\u0002\u0002\u0002\u000e\u0003\u0002\u0002\u0002\u0002\u0010\u0003\u0002',
  '\u0002\u0002\u0002\u0012\u0003\u0002\u0002\u0002\u0002\u0014\u0003\u0002',
  '\u0002\u0002\u0002\u0016\u0003\u0002\u0002\u0002\u0002\u0018\u0003\u0002',
  '\u0002\u0002\u0002\u001a\u0003\u0002\u0002\u0002\u0002\u001c\u0003\u0002',
  '\u0002\u0002\u0002\u001e\u0003\u0002\u0002\u0002\u0002 \u0003\u0002',
  '\u0002\u0002\u0002"\u0003\u0002\u0002\u0002\u0002$\u0003\u0002\u0002',
  '\u0002\u0002&\u0003\u0002\u0002\u0002\u0002(\u0003\u0002\u0002\u0002',
  '\u0002*\u0003\u0002\u0002\u0002\u0002,\u0003\u0002\u0002\u0002\u0002',
  '.\u0003\u0002\u0002\u0002\u00020\u0003\u0002\u0002\u0002\u00022\u0003',
  '\u0002\u0002\u0002\u00024\u0003\u0002\u0002\u0002\u00026\u0003\u0002',
  '\u0002\u0002\u00028\u0003\u0002\u0002\u0002\u0002:\u0003\u0002\u0002',
  '\u0002\u0002@\u0003\u0002\u0002\u0002\u0002J\u0003\u0002\u0002\u0002',
  '\u0002L\u0003\u0002\u0002\u0002\u0002N\u0003\u0002\u0002\u0002\u0002',
  'P\u0003\u0002\u0002\u0002\u0002R\u0003\u0002\u0002\u0002\u0002T\u0003',
  '\u0002\u0002\u0002\u0003V\u0003\u0002\u0002\u0002\u0003X\u0003\u0002',
  '\u0002\u0002\u0003^\u0003\u0002\u0002\u0002\u0003`\u0003\u0002\u0002',
  '\u0002\u0003b\u0003\u0002\u0002\u0002\u0004d\u0003\u0002\u0002\u0002',
  '\u0006k\u0003\u0002\u0002\u0002\bp\u0003\u0002\u0002\u0002\nw\u0003',
  '\u0002\u0002\u0002\f\u0080\u0003\u0002\u0002\u0002\u000e\u008a\u0003',
  '\u0002\u0002\u0002\u0010\u0093\u0003\u0002\u0002\u0002\u0012\u009c\u0003',
  '\u0002\u0002\u0002\u0014\u00a3\u0003\u0002\u0002\u0002\u0016\u00a8\u0003',
  '\u0002\u0002\u0002\u0018\u00ac\u0003\u0002\u0002\u0002\u001a\u00b3\u0003',
  '\u0002\u0002\u0002\u001c\u00bd\u0003\u0002\u0002\u0002\u001e\u00cb\u0003',
  '\u0002\u0002\u0002 \u00cd\u0003\u0002\u0002\u0002"\u00cf\u0003\u0002',
  '\u0002\u0002$\u00d1\u0003\u0002\u0002\u0002&\u00d3\u0003\u0002\u0002',
  '\u0002(\u00d5\u0003\u0002\u0002\u0002*\u00d7\u0003\u0002\u0002\u0002',
  ',\u00d9\u0003\u0002\u0002\u0002.\u00db\u0003\u0002\u0002\u00020\u00dd',
  '\u0003\u0002\u0002\u00022\u00df\u0003\u0002\u0002\u00024\u00e8\u0003',
  '\u0002\u0002\u00026\u0100\u0003\u0002\u0002\u00028\u012b\u0003\u0002',
  '\u0002\u0002:\u012d\u0003\u0002\u0002\u0002<\u0136\u0003\u0002\u0002',
  '\u0002>\u013c\u0003\u0002\u0002\u0002@\u013e\u0003\u0002\u0002\u0002',
  'B\u0148\u0003\u0002\u0002\u0002D\u014d\u0003\u0002\u0002\u0002F\u0153',
  '\u0003\u0002\u0002\u0002H\u0155\u0003\u0002\u0002\u0002J\u015f\u0003',
  '\u0002\u0002\u0002L\u0161\u0003\u0002\u0002\u0002N\u016f\u0003\u0002',
  '\u0002\u0002P\u017a\u0003\u0002\u0002\u0002R\u0184\u0003\u0002\u0002',
  '\u0002T\u018a\u0003\u0002\u0002\u0002V\u0192\u0003\u0002\u0002\u0002',
  'X\u0194\u0003\u0002\u0002\u0002Z\u0196\u0003\u0002\u0002\u0002\\\u0198',
  '\u0003\u0002\u0002\u0002^\u019a\u0003\u0002\u0002\u0002`\u019c\u0003',
  '\u0002\u0002\u0002b\u019e\u0003\u0002\u0002\u0002de\u0007o\u0002\u0002',
  'ef\u0007q\u0002\u0002fg\u0007f\u0002\u0002gh\u0007w\u0002\u0002hi\u0007',
  'n\u0002\u0002ij\u0007g\u0002\u0002j\u0005\u0003\u0002\u0002\u0002kl',
  '\u0007f\u0002\u0002lm\u0007c\u0002\u0002mn\u0007v\u0002\u0002no\u0007',
  'c\u0002\u0002o\u0007\u0003\u0002\u0002\u0002pq\u0007u\u0002\u0002qr',
  '\u0007q\u0002\u0002rs\u0007w\u0002\u0002st\u0007t\u0002\u0002tu\u0007',
  'e\u0002\u0002uv\u0007g\u0002\u0002v\t\u0003\u0002\u0002\u0002wx\u0007',
  'r\u0002\u0002xy\u0007t\u0002\u0002yz\u0007q\u0002\u0002z{\u0007x\u0002',
  '\u0002{|\u0007k\u0002\u0002|}\u0007f\u0002\u0002}~\u0007g\u0002\u0002',
  '~\u007f\u0007t\u0002\u0002\u007f\u000b\u0003\u0002\u0002\u0002\u0080',
  '\u0081\u0007v\u0002\u0002\u0081\u0082\u0007g\u0002\u0002\u0082\u0083',
  '\u0007t\u0002\u0002\u0083\u0084\u0007t\u0002\u0002\u0084\u0085\u0007',
  'c\u0002\u0002\u0085\u0086\u0007h\u0002\u0002\u0086\u0087\u0007q\u0002',
  '\u0002\u0087\u0088\u0007t\u0002\u0002\u0088\u0089\u0007o\u0002\u0002',
  '\u0089\r\u0003\u0002\u0002\u0002\u008a\u008b\u0007t\u0002\u0002\u008b',
  '\u008c\u0007g\u0002\u0002\u008c\u008d\u0007u\u0002\u0002\u008d\u008e',
  '\u0007q\u0002\u0002\u008e\u008f\u0007w\u0002\u0002\u008f\u0090\u0007',
  't\u0002\u0002\u0090\u0091\u0007e\u0002\u0002\u0091\u0092\u0007g\u0002',
  '\u0002\u0092\u000f\u0003\u0002\u0002\u0002\u0093\u0094\u0007x\u0002',
  '\u0002\u0094\u0095\u0007c\u0002\u0002\u0095\u0096\u0007t\u0002\u0002',
  '\u0096\u0097\u0007k\u0002\u0002\u0097\u0098\u0007c\u0002\u0002\u0098',
  '\u0099\u0007d\u0002\u0002\u0099\u009a\u0007n\u0002\u0002\u009a\u009b',
  '\u0007g\u0002\u0002\u009b\u0011\u0003\u0002\u0002\u0002\u009c\u009d',
  '\u0007q\u0002\u0002\u009d\u009e\u0007w\u0002\u0002\u009e\u009f\u0007',
  'v\u0002\u0002\u009f\u00a0\u0007r\u0002\u0002\u00a0\u00a1\u0007w\u0002',
  '\u0002\u00a1\u00a2\u0007v\u0002\u0002\u00a2\u0013\u0003\u0002\u0002',
  '\u0002\u00a3\u00a4\u0007n\u0002\u0002\u00a4\u00a5\u0007k\u0002\u0002',
  '\u00a5\u00a6\u0007u\u0002\u0002\u00a6\u00a7\u0007v\u0002\u0002\u00a7',
  '\u0015\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007o\u0002\u0002\u00a9',
  '\u00aa\u0007c\u0002\u0002\u00aa\u00ab\u0007r\u0002\u0002\u00ab\u0017',
  '\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007q\u0002\u0002\u00ad\u00ae',
  '\u0007d\u0002\u0002\u00ae\u00af\u0007l\u0002\u0002\u00af\u00b0\u0007',
  'g\u0002\u0002\u00b0\u00b1\u0007e\u0002\u0002\u00b1\u00b2\u0007v\u0002',
  '\u0002\u00b2\u0019\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007e\u0002',
  '\u0002\u00b4\u00b5\u0007q\u0002\u0002\u00b5\u00b6\u0007p\u0002\u0002',
  '\u00b6\u00b7\u0007f\u0002\u0002\u00b7\u00b8\u0007k\u0002\u0002\u00b8',
  '\u00b9\u0007v\u0002\u0002\u00b9\u00ba\u0007k\u0002\u0002\u00ba\u00bb',
  '\u0007q\u0002\u0002\u00bb\u00bc\u0007p\u0002\u0002\u00bc\u001b\u0003',
  '\u0002\u0002\u0002\u00bd\u00be\u0007g\u0002\u0002\u00be\u00bf\u0007',
  't\u0002\u0002\u00bf\u00c0\u0007t\u0002\u0002\u00c0\u00c1\u0007q\u0002',
  '\u0002\u00c1\u00c2\u0007t\u0002\u0002\u00c2\u00c3\u0007a\u0002\u0002',
  '\u00c3\u00c4\u0007o\u0002\u0002\u00c4\u00c5\u0007g\u0002\u0002\u00c5',
  '\u00c6\u0007u\u0002\u0002\u00c6\u00c7\u0007u\u0002\u0002\u00c7\u00c8',
  '\u0007c\u0002\u0002\u00c8\u00c9\u0007i\u0002\u0002\u00c9\u00ca\u0007',
  'g\u0002\u0002\u00ca\u001d\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007',
  '}\u0002\u0002\u00cc\u001f\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007',
  '\u007f\u0002\u0002\u00ce!\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007',
  '?\u0002\u0002\u00d0#\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007*\u0002',
  '\u0002\u00d2%\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007+\u0002\u0002',
  "\u00d4\'\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007]\u0002\u0002\u00d6",
  ')\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007_\u0002\u0002\u00d8+\u0003',
  '\u0002\u0002\u0002\u00d9\u00da\u0007.\u0002\u0002\u00da-\u0003\u0002',
  '\u0002\u0002\u00db\u00dc\u00070\u0002\u0002\u00dc/\u0003\u0002\u0002',
  '\u0002\u00dd\u00de\u0007/\u0002\u0002\u00de1\u0003\u0002\u0002\u0002',
  '\u00df\u00e0\u0007,\u0002\u0002\u00e03\u0003\u0002\u0002\u0002\u00e1',
  '\u00e9\t\u0002\u0002\u0002\u00e2\u00e9\u0005"\u0011\u0002\u00e3\u00e4',
  '\u0007?\u0002\u0002\u00e4\u00e9\u0007?\u0002\u0002\u00e5\u00e9\u0005',
  '2\u0019\u0002\u00e6\u00e9\u00050\u0018\u0002\u00e7\u00e9\t\u0003\u0002',
  '\u0002\u00e8\u00e1\u0003\u0002\u0002\u0002\u00e8\u00e2\u0003\u0002\u0002',
  '\u0002\u00e8\u00e3\u0003\u0002\u0002\u0002\u00e8\u00e5\u0003\u0002\u0002',
  '\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e7\u0003\u0002\u0002',
  '\u0002\u00e95\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007v\u0002\u0002',
  '\u00eb\u00ec\u0007t\u0002\u0002\u00ec\u00ed\u0007w\u0002\u0002\u00ed',
  '\u0101\u0007g\u0002\u0002\u00ee\u00ef\u0007$\u0002\u0002\u00ef\u00f0',
  '\u0007v\u0002\u0002\u00f0\u00f1\u0007t\u0002\u0002\u00f1\u00f2\u0007',
  'w\u0002\u0002\u00f2\u00f3\u0007g\u0002\u0002\u00f3\u0101\u0007$\u0002',
  '\u0002\u00f4\u00f5\u0007h\u0002\u0002\u00f5\u00f6\u0007c\u0002\u0002',
  '\u00f6\u00f7\u0007n\u0002\u0002\u00f7\u00f8\u0007u\u0002\u0002\u00f8',
  '\u0101\u0007g\u0002\u0002\u00f9\u00fa\u0007$\u0002\u0002\u00fa\u00fb',
  '\u0007h\u0002\u0002\u00fb\u00fc\u0007c\u0002\u0002\u00fc\u00fd\u0007',
  'n\u0002\u0002\u00fd\u00fe\u0007u\u0002\u0002\u00fe\u00ff\u0007g\u0002',
  '\u0002\u00ff\u0101\u0007$\u0002\u0002\u0100\u00ea\u0003\u0002\u0002',
  '\u0002\u0100\u00ee\u0003\u0002\u0002\u0002\u0100\u00f4\u0003\u0002\u0002',
  '\u0002\u0100\u00f9\u0003\u0002\u0002\u0002\u01017\u0003\u0002\u0002',
  '\u0002\u0102\u0103\u0007u\u0002\u0002\u0103\u0104\u0007v\u0002\u0002',
  '\u0104\u0105\u0007t\u0002\u0002\u0105\u0106\u0007k\u0002\u0002\u0106',
  '\u0107\u0007p\u0002\u0002\u0107\u012c\u0007i\u0002\u0002\u0108\u0109',
  '\u0007$\u0002\u0002\u0109\u010a\u0007u\u0002\u0002\u010a\u010b\u0007',
  'v\u0002\u0002\u010b\u010c\u0007t\u0002\u0002\u010c\u010d\u0007k\u0002',
  '\u0002\u010d\u010e\u0007p\u0002\u0002\u010e\u010f\u0007i\u0002\u0002',
  '\u010f\u012c\u0007$\u0002\u0002\u0110\u0111\u0007p\u0002\u0002\u0111',
  '\u0112\u0007w\u0002\u0002\u0112\u0113\u0007o\u0002\u0002\u0113\u0114',
  '\u0007d\u0002\u0002\u0114\u0115\u0007g\u0002\u0002\u0115\u012c\u0007',
  't\u0002\u0002\u0116\u0117\u0007$\u0002\u0002\u0117\u0118\u0007p\u0002',
  '\u0002\u0118\u0119\u0007w\u0002\u0002\u0119\u011a\u0007o\u0002\u0002',
  '\u011a\u011b\u0007d\u0002\u0002\u011b\u011c\u0007g\u0002\u0002\u011c',
  '\u011d\u0007t\u0002\u0002\u011d\u012c\u0007$\u0002\u0002\u011e\u011f',
  '\u0007d\u0002\u0002\u011f\u0120\u0007q\u0002\u0002\u0120\u0121\u0007',
  'q\u0002\u0002\u0121\u012c\u0007n\u0002\u0002\u0122\u0123\u0007$\u0002',
  '\u0002\u0123\u0124\u0007d\u0002\u0002\u0124\u0125\u0007q\u0002\u0002',
  '\u0125\u0126\u0007q\u0002\u0002\u0126\u0127\u0007n\u0002\u0002\u0127',
  '\u012c\u0007$\u0002\u0002\u0128\u0129\u0007c\u0002\u0002\u0129\u012a',
  '\u0007p\u0002\u0002\u012a\u012c\u0007{\u0002\u0002\u012b\u0102\u0003',
  '\u0002\u0002\u0002\u012b\u0108\u0003\u0002\u0002\u0002\u012b\u0110\u0003',
  '\u0002\u0002\u0002\u012b\u0116\u0003\u0002\u0002\u0002\u012b\u011e\u0003',
  '\u0002\u0002\u0002\u012b\u0122\u0003\u0002\u0002\u0002\u012b\u0128\u0003',
  '\u0002\u0002\u0002\u012c9\u0003\u0002\u0002\u0002\u012d\u0131\u0005',
  '>\u001f\u0002\u012e\u0130\u0005<\u001e\u0002\u012f\u012e\u0003\u0002',
  '\u0002\u0002\u0130\u0133\u0003\u0002\u0002\u0002\u0131\u012f\u0003\u0002',
  '\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132;\u0003\u0002',
  '\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002\u0134\u0137\u0005>',
  '\u001f\u0002\u0135\u0137\t\u0004\u0002\u0002\u0136\u0134\u0003\u0002',
  '\u0002\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0137=\u0003\u0002',
  '\u0002\u0002\u0138\u013d\t\u0005\u0002\u0002\u0139\u013d\n\u0006\u0002',
  '\u0002\u013a\u013b\t\u0007\u0002\u0002\u013b\u013d\t\b\u0002\u0002\u013c',
  '\u0138\u0003\u0002\u0002\u0002\u013c\u0139\u0003\u0002\u0002\u0002\u013c',
  '\u013a\u0003\u0002\u0002\u0002\u013d?\u0003\u0002\u0002\u0002\u013e',
  '\u0143\u0007$\u0002\u0002\u013f\u0142\u0005B!\u0002\u0140\u0142\u0005',
  'H$\u0002\u0141\u013f\u0003\u0002\u0002\u0002\u0141\u0140\u0003\u0002',
  '\u0002\u0002\u0142\u0145\u0003\u0002\u0002\u0002\u0143\u0141\u0003\u0002',
  '\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u0146\u0003\u0002',
  '\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0146\u0147\u0007$',
  '\u0002\u0002\u0147A\u0003\u0002\u0002\u0002\u0148\u014b\u0007^\u0002',
  '\u0002\u0149\u014c\t\t\u0002\u0002\u014a\u014c\u0005D"\u0002\u014b',
  '\u0149\u0003\u0002\u0002\u0002\u014b\u014a\u0003\u0002\u0002\u0002\u014c',
  'C\u0003\u0002\u0002\u0002\u014d\u014e\u0007w\u0002\u0002\u014e\u014f',
  '\u0005F#\u0002\u014f\u0150\u0005F#\u0002\u0150\u0151\u0005F#\u0002\u0151',
  '\u0152\u0005F#\u0002\u0152E\u0003\u0002\u0002\u0002\u0153\u0154\t\n',
  '\u0002\u0002\u0154G\u0003\u0002\u0002\u0002\u0155\u0156\n\u000b\u0002',
  '\u0002\u0156I\u0003\u0002\u0002\u0002\u0157\u0160\u00072\u0002\u0002',
  '\u0158\u015c\t\f\u0002\u0002\u0159\u015b\t\u0004\u0002\u0002\u015a\u0159',
  '\u0003\u0002\u0002\u0002\u015b\u015e\u0003\u0002\u0002\u0002\u015c\u015a',
  '\u0003\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d\u0160',
  '\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015f\u0157',
  '\u0003\u0002\u0002\u0002\u015f\u0158\u0003\u0002\u0002\u0002\u0160K',
  '\u0003\u0002\u0002\u0002\u0161\u0162\u00071\u0002\u0002\u0162\u0163',
  '\u0007,\u0002\u0002\u0163\u0167\u0003\u0002\u0002\u0002\u0164\u0166',
  '\u000b\u0002\u0002\u0002\u0165\u0164\u0003\u0002\u0002\u0002\u0166\u0169',
  '\u0003\u0002\u0002\u0002\u0167\u0168\u0003\u0002\u0002\u0002\u0167\u0165',
  '\u0003\u0002\u0002\u0002\u0168\u016a\u0003\u0002\u0002\u0002\u0169\u0167',
  '\u0003\u0002\u0002\u0002\u016a\u016b\u0007,\u0002\u0002\u016b\u016c',
  '\u00071\u0002\u0002\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u016e',
  '\b&\u0002\u0002\u016eM\u0003\u0002\u0002\u0002\u016f\u0170\u00071\u0002',
  '\u0002\u0170\u0171\u00071\u0002\u0002\u0171\u0175\u0003\u0002\u0002',
  '\u0002\u0172\u0174\n\r\u0002\u0002\u0173\u0172\u0003\u0002\u0002\u0002',
  '\u0174\u0177\u0003\u0002\u0002\u0002\u0175\u0173\u0003\u0002\u0002\u0002',
  '\u0175\u0176\u0003\u0002\u0002\u0002\u0176\u0178\u0003\u0002\u0002\u0002',
  "\u0177\u0175\u0003\u0002\u0002\u0002\u0178\u0179\b\'\u0002\u0002\u0179",
  'O\u0003\u0002\u0002\u0002\u017a\u017e\u0007%\u0002\u0002\u017b\u017d',
  '\n\r\u0002\u0002\u017c\u017b\u0003\u0002\u0002\u0002\u017d\u0180\u0003',
  '\u0002\u0002\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017e\u017f\u0003',
  '\u0002\u0002\u0002\u017f\u0181\u0003\u0002\u0002\u0002\u0180\u017e\u0003',
  '\u0002\u0002\u0002\u0181\u0182\b(\u0002\u0002\u0182Q\u0003\u0002\u0002',
  '\u0002\u0183\u0185\t\u000e\u0002\u0002\u0184\u0183\u0003\u0002\u0002',
  '\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0184\u0003\u0002\u0002',
  '\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u0188\u0003\u0002\u0002',
  '\u0002\u0188\u0189\b)\u0002\u0002\u0189S\u0003\u0002\u0002\u0002\u018a',
  '\u018b\u0007>\u0002\u0002\u018b\u018c\u0007>\u0002\u0002\u018c\u018d',
  '\u0007G\u0002\u0002\u018d\u018e\u0007Q\u0002\u0002\u018e\u018f\u0007',
  'H\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190\u0191\b*\u0003',
  '\u0002\u0191U\u0003\u0002\u0002\u0002\u0192\u0193\t\u000f\u0002\u0002',
  '\u0193W\u0003\u0002\u0002\u0002\u0194\u0195\u0005R)\u0002\u0195Y\u0003',
  '\u0002\u0002\u0002\u0196\u0197\u0005F#\u0002\u0197[\u0003\u0002\u0002',
  '\u0002\u0198\u0199\u0005H$\u0002\u0199]\u0003\u0002\u0002\u0002\u019a',
  '\u019b\u0005J%\u0002\u019b_\u0003\u0002\u0002\u0002\u019c\u019d\t\u0010',
  '\u0002\u0002\u019da\u0003\u0002\u0002\u0002\u019e\u019f\u0007G\u0002',
  '\u0002\u019f\u01a0\u0007Q\u0002\u0002\u01a0\u01a1\u0007H\u0002\u0002',
  '\u01a1\u01a2\u0003\u0002\u0002\u0002\u01a2\u01a3\b1\u0004\u0002\u01a3',
  'c\u0003\u0002\u0002\u0002\u0013\u0002\u0003\u00e8\u0100\u012b\u0131',
  '\u0136\u013c\u0141\u0143\u014b\u015c\u015f\u0167\u0175\u017e\u0186\u0005',
  '\u0002\u0003\u0002\u0007\u0003\u0002\u0006\u0002\u0002'].join('');

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

export default class hclLexer extends antlr4.Lexer {
  static grammarFileName = 'hclLexer.g4';

  static channelNames = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

  static modeNames = ['DEFAULT_MODE', 'SCRIPT'];

  static literalNames = [null, "'module'", "'data'", "'source'", "'provider'",
    "'terraform'", "'resource'", "'variable'", "'output'",
    "'list'", "'map'", "'object'", "'condition'", "'error_message'",
    "'{'", "'}'", "'='", "'('", "')'", "'['", "']'",
    "','", "'.'", "'-'", "'*'", null, null, null, null,
    null, null, null, null, null, null, "'<<EOF'",
    null, null, null, null, "'EOF'"];

  static symbolicNames = [null, 'MODULE', 'DATA', 'SOURCE', 'PROVIDER',
    'TERRAFORM', 'RESOURCE', 'VARIABLE', 'OUTPUT',
    'LIST', 'MAP', 'OBJECT', 'CONDITION', 'ERROR',
    'AO', 'AF', 'EQUAL', 'PO', 'PF', 'CO', 'CF', 'VIRG',
    'POINT', 'TIRET', 'MULT', 'BOOLEANOP', 'BOOLEAN',
    'TYPE', 'IDENTIFIER', 'STRING', 'NUMBER', 'COMMENT',
    'LINE_COMMENT', 'HAS_COMMENT', 'WS', 'OPEN', 'IDENTIFIERS',
    'WSS', 'NUMBERS', 'AUTRE', 'CLOSE'];

  static ruleNames = ['MODULE', 'DATA', 'SOURCE', 'PROVIDER', 'TERRAFORM',
    'RESOURCE', 'VARIABLE', 'OUTPUT', 'LIST', 'MAP', 'OBJECT',
    'CONDITION', 'ERROR', 'AO', 'AF', 'EQUAL', 'PO', 'PF',
    'CO', 'CF', 'VIRG', 'POINT', 'TIRET', 'MULT', 'BOOLEANOP',
    'BOOLEAN', 'TYPE', 'IDENTIFIER', 'LetterOrDigit',
    'Letter', 'STRING', 'ESC', 'UNICODE', 'HEX', 'SAFECODEPOINT',
    'NUMBER', 'COMMENT', 'LINE_COMMENT', 'HAS_COMMENT',
    'WS', 'OPEN', 'IDENTIFIERS', 'WSS', 'HEXS', 'SAFECODEPOINTS',
    'NUMBERS', 'AUTRE', 'CLOSE'];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
  }

  get atn() {
    return atn;
  }
}

hclLexer.EOF = antlr4.Token.EOF;
hclLexer.MODULE = 1;
hclLexer.DATA = 2;
hclLexer.SOURCE = 3;
hclLexer.PROVIDER = 4;
hclLexer.TERRAFORM = 5;
hclLexer.RESOURCE = 6;
hclLexer.VARIABLE = 7;
hclLexer.OUTPUT = 8;
hclLexer.LIST = 9;
hclLexer.MAP = 10;
hclLexer.OBJECT = 11;
hclLexer.CONDITION = 12;
hclLexer.ERROR = 13;
hclLexer.AO = 14;
hclLexer.AF = 15;
hclLexer.EQUAL = 16;
hclLexer.PO = 17;
hclLexer.PF = 18;
hclLexer.CO = 19;
hclLexer.CF = 20;
hclLexer.VIRG = 21;
hclLexer.POINT = 22;
hclLexer.TIRET = 23;
hclLexer.MULT = 24;
hclLexer.BOOLEANOP = 25;
hclLexer.BOOLEAN = 26;
hclLexer.TYPE = 27;
hclLexer.IDENTIFIER = 28;
hclLexer.STRING = 29;
hclLexer.NUMBER = 30;
hclLexer.COMMENT = 31;
hclLexer.LINE_COMMENT = 32;
hclLexer.HAS_COMMENT = 33;
hclLexer.WS = 34;
hclLexer.OPEN = 35;
hclLexer.IDENTIFIERS = 36;
hclLexer.WSS = 37;
hclLexer.NUMBERS = 38;
hclLexer.AUTRE = 39;
hclLexer.CLOSE = 40;

hclLexer.SCRIPT = 1;
