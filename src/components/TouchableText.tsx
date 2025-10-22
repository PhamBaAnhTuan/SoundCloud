import { StyleSheet, Text, TouchableOpacity, type TextProps } from 'react-native';

import { useTheme } from '../hooks/useTheme';

export type TouchableTextProps = TextProps & {
  type?: 'small' | 'smallBold' | 'default' | 'defaultBold' | 'large' | 'largeBold' | 'title' | 'subtitle' | 'link'
};

export function TouchableText({
  style,
  type = 'default',
  ...rest
}: TouchableTextProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity {...rest}>
      <Text
        style={[
          { color: theme.text },
          type === 'small' ? styles.small : undefined,
          type === 'smallBold' ? styles.smallBold : undefined,
          type === 'default' ? styles.default : undefined,
          type === 'defaultBold' ? styles.defaultBold : undefined,
          type === 'large' ? styles.large : undefined,
          type === 'largeBold' ? styles.largeBold : undefined,
          type === 'title' ? styles.title : undefined,
          type === 'subtitle' ? styles.subtitle : undefined,
          type === 'link' ? styles.link : undefined,
          style,
        ]}
        {...rest}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 13,
  },
  smallBold: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  default: {
    fontSize: 14,
  },
  defaultBold: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  large: {
    fontSize: 17,
  },
  largeBold: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: '#0a7ea4',
  }
});
