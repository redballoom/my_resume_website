import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, FileText, Briefcase, FolderOpen, GraduationCap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: User, label: '个人信息', path: '/#personal' },
    { icon: FileText, label: '个人简介', path: '/#summary' },
    { icon: Briefcase, label: '工作经历', path: '/#work' },
    { icon: FolderOpen, label: '项目经历', path: '/#projects' },
    { icon: GraduationCap, label: '教育背景', path: '/#education' },
  ];

  const handleMenuClick = useCallback((path: string) => {
    // 立即关闭菜单，避免延迟
    setIsOpen(false);

    // 使用 setTimeout 确保关闭动画完成后再导航
    setTimeout(() => {
      if (path.startsWith('/#')) {
        // 处理页面内锚点跳转
        const element = document.querySelector(path.replace('/#', '#'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // 处理路由跳转
        navigate(path);
      }
    }, 100); // 稍微延迟以确保关闭动画开始
  }, [navigate]);

  // 防止菜单快速重复点击
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // 优化的动画变体 - 减少复杂度
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1] // 自定义贝塞尔曲线，更自然
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.25,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const menuItemsVariants = {
    open: {
      transition: {
        staggerChildren: 0.06, // 减少延迟
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut"
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.2
      }
    }
  };

  // 使用 will-change 优化性能
  return (
    <>
      {/* 汉堡按钮 - 只在移动端显示 */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">
        <motion.button
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 will-change-transform"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", duration: 0.15 }}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            animate={isOpen ? "open" : "closed"}
            style={{ willChange: 'transform' }}
          >
            <motion.path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                open: {
                  d: "M6 18L18 6M6 6l12 12",
                  transition: { duration: 0.2 }
                },
                closed: {
                  d: "M4 6h16M4 12h16M4 18h16",
                  transition: { duration: 0.2 }
                }
              }}
            />
          </motion.svg>
        </motion.button>
      </div>

      {/* 移动端导航菜单 */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[50] md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={toggleMenu}
              style={{ willChange: 'opacity' }}
            />

            {/* 侧边菜单 */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[55] md:hidden overflow-hidden"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ willChange: 'transform' }}
            >
              <div className="h-full flex flex-col">
                {/* 菜单头部 */}
                <motion.div
                  className="p-6 pt-20 border-b border-gray-100"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800">导航菜单</h3>
                </motion.div>

                {/* 菜单项 */}
                <div className="flex-1 overflow-y-auto">
                  <motion.ul
                    className="p-4 space-y-1"
                    variants={menuItemsVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {menuItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === '/' &&
                                     item.path.startsWith('/#');

                      return (
                        <motion.li
                          key={item.path}
                          variants={itemVariants}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "tween", duration: 0.1 }}
                        >
                          <motion.button
                            onClick={() => handleMenuClick(item.path)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                              isActive
                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            whileHover={{
                              backgroundColor: isActive ? 'rgb(219 234 254)' : 'rgb(249 250 251)',
                              x: 4
                            }}
                            transition={{ type: "tween", duration: 0.15 }}
                          >
                            <motion.div
                              className="flex-shrink-0"
                              whileHover={{ rotate: [0, -5, 5, 0] }}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="w-5 h-5" />
                            </motion.div>
                            <span className="flex-1 text-left">{item.label}</span>
                            {isActive && (
                              <motion.div
                                className="w-2 h-2 bg-blue-600 rounded-full"
                                layoutId="activeIndicator"
                                transition={{ type: "tween", duration: 0.3 }}
                              />
                            )}
                          </motion.button>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>

                {/* 底部装饰 */}
                <motion.div
                  className="p-4 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3" />
                  <p className="text-center text-xs text-gray-500">
                    © 2025 吴文豪的简历
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;