// 设计Token - 统一的设计系统变量

export const tokens = {
  // 颜色系统
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      600: '#16a34a',
      700: '#15803d',
    },
    accent: {
      50: '#faf5ff',
      100: '#f3e8ff',
      600: '#9333ea',
      700: '#7c3aed',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },

  // 间距系统 (4px基准)
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '0.75rem',  // 12px
    lg: '1rem',     // 16px
    xl: '1.5rem',   // 24px
    '2xl': '2rem',  // 32px
    '3xl': '3rem',  // 48px
  },

  // 字体系统
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
    },
    fontWeight: {
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // 圆角系统
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
  },

  // 阴影系统
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },

  // 边框宽度
  borderWidth: {
    light: '1px',
    medium: '2px',
    thick: '4px',
  },
};

// 导出常用的Tailwind类名
export const tw = {
  // 标题样式
  heading: {
    h1: 'text-3xl font-bold text-gray-900 mb-6',
    h2: 'text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2',
    h3: 'text-xl font-semibold text-primary-700 mb-2',
    h4: 'text-lg font-medium text-gray-800 mb-1',
  },

  // 间距
  spacing: {
    section: 'mb-8',
    subsection: 'mb-6',
    item: 'mb-4',
    small: 'mb-2',
  },

  // 卡片样式
  card: {
    base: 'bg-white rounded-lg shadow-sm border border-gray-200 p-4',
    elevated: 'bg-white rounded-lg shadow-md p-4',
    bordered: 'bg-white rounded-lg border-l-4 p-4',
  },

  // 按钮样式
  button: {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors',
    accent: 'bg-accent-600 hover:bg-accent-700 text-white font-medium py-2 px-4 rounded-md transition-colors',
  },

  // 文本样式
  text: {
    body: 'text-gray-700 leading-relaxed',
    muted: 'text-gray-500 text-sm',
    highlight: 'text-primary-600 font-medium',
  },
};