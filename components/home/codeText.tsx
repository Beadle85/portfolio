import React from 'react';

type CodeColor = 'purple' | 'yellow' | 'blue' | 'lightBlue' | 'green' | 'gold' | 'orange' | 'lightGreen';

export default function CodeText({ children, codeColor }: { children: React.ReactNode; codeColor: CodeColor }) {
  function getColor(codeColor: CodeColor) {
    switch (codeColor) {
      case 'purple':
        return '#C586C0';
      case 'yellow':
        return '#DCDCAA';
      case 'green':
        return '#4EC9B0';
      case 'lightBlue':
        return '#9CDCFE';
      case 'blue':
        return '#569cd6';
      case 'gold':
        return 'gold';
      case 'orange':
        return '#ce9178';
      case 'lightGreen':
        return '#b5cea8';
    }
  }
  return <span style={{ color: getColor(codeColor) }}>{children}</span>;
}

// "foreground": "#DCDCAA"
// "foreground": "#4EC9B0"
// "foreground": "#4EC9B0"
// "foreground": "#C586C0"
// "foreground": "#9cdcfe"
// "foreground": "#4FC1FF"
// "foreground": "#9CDCFE"
// "foreground": "#CE9178"
// "foreground": "#CE9178"
// "foreground": "#d16969"
// "foreground": "#DCDCAA"
// "foreground": "#d7ba7d"
// "foreground": "#569cd6"
// "foreground": "#d7ba7d"
// "foreground": "#C8C8C8"
// "newOperator":"#C586C0"
// 		"stringLiteral":"#ce9178"
// 		"customLiteral": "#DCDCAA"
// 		"numberLiteral": "#b5cea8"
