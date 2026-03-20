import { motion } from 'framer-motion';
import { MapPin, Mail, Github, BookOpen, Code2, Coffee, Music } from 'lucide-react';
import { TerminalPrompt, TerminalWindow } from '../components/TerminalPrompt';
import { author } from '../data/posts';

const skills = [
  { category: '语言', items: ['TypeScript', 'Rust', 'Python', 'Go', 'C/C++'] },
  { category: '前端', items: ['React', 'Vue', 'Tailwind CSS', 'Next.js'] },
  { category: '后端', items: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'] },
  { category: '工具', items: ['Neovim', 'Git', 'Linux', 'Figma'] },
];

const interests = [
  { icon: BookOpen, label: '阅读', desc: '村上春树、博尔赫斯、技术书籍' },
  { icon: Code2, label: '开源', desc: '贡献代码，维护工具' },
  { icon: Coffee, label: '咖啡', desc: '手冲、意式，缺一不可' },
  { icon: Music, label: '音乐', desc: '爵士、后摇、电子' },
];

export function About() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-24 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <TerminalPrompt className="mb-3 sm:mb-4 text-sm sm:text-base">cat about.md</TerminalPrompt>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text-primary mb-3 sm:mb-4 leading-tight">
            关于我
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Left: Profile - 移动端改为横向卡片，桌面端保持纵向 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1"
          >
            <div className="md:sticky md:top-24">
              {/* 移动端：横向布局展示头像和基本信息，桌面端：纵向 */}
              <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-0 p-4 sm:p-5 md:p-0 rounded-2xl md:rounded-none bg-ink-800/30 md:bg-transparent border border-ink-700/30 md:border-0">
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-amber-400/20 to-mint-400/20 border border-ink-600 flex items-center justify-center shrink-0">
                  <span className="text-3xl md:text-4xl font-serif text-amber-400">
                    {author.name.charAt(0)}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 md:mt-6">
                  <h2 className="text-lg md:text-xl font-serif text-text-primary mb-1">
                    {author.name}
                  </h2>
                  <p className="text-amber-400 text-sm mb-4">{author.title}</p>

                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-amber-400 shrink-0" />
                      <span>{author.location}</span>
                    </div>
                    <a
                      href={`mailto:${author.email}`}
                      className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                    >
                      <Mail size={14} className="text-amber-400 shrink-0" />
                      <span className="break-all">{author.email}</span>
                    </a>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <a
                      href={author.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-ink-800 text-text-muted hover:text-text-primary hover:bg-ink-700 transition-all active:scale-95"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-8 sm:space-y-10"
          >
            {/* Bio - 添加卡片背景增加层次感 */}
            <section className="p-5 sm:p-6 rounded-2xl bg-ink-800/20 border border-ink-700/30 md:bg-transparent md:border-0 md:p-0">
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                简介
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {author.bio}
              </p>
              <p className="text-text-secondary leading-relaxed mt-4 text-sm sm:text-base">
                在这个博客里，我记录技术学习的笔记，分享对工具的探索，
                偶尔也写一些关于生活的随笔。我相信好的代码应该像诗歌一样优雅，
                好的文章应该像代码一样精确。
              </p>
            </section>

            {/* Now */}
            <section>
              <TerminalWindow title="now.json">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-mint-400">"reading"</span>
                    <span className="text-text-muted">:</span>
                    <span className="text-amber-400">"《卡夫卡的诗与画》"</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-mint-400">"learning"</span>
                    <span className="text-text-muted">:</span>
                    <span className="text-amber-400">"Rust, 分布式系统"</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-mint-400">"working_on"</span>
                    <span className="text-text-muted">:</span>
                    <span className="text-amber-400">"个人知识管理系统"</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-mint-400">"listening"</span>
                    <span className="text-text-muted">:</span>
                    <span className="text-amber-400">" jazz & post-rock "</span>
                  </div>
                </div>
              </TerminalWindow>
            </section>

            {/* Skills */}
            <section>
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
                技术栈
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.category}
                    className="p-3.5 sm:p-4 rounded-xl bg-ink-800/50 border border-ink-600/50 hover:border-ink-500/50 transition-colors"
                  >
                    <h4 className="text-xs text-text-muted font-mono mb-2.5">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2 py-0.5 rounded bg-ink-700 text-text-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section>
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
                兴趣爱好
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-ink-800/30 border border-ink-700/30 hover:bg-ink-800/50 transition-colors"
                  >
                    <interest.icon
                      size={16}
                      className="text-amber-400 mt-0.5 shrink-0"
                    />
                    <div>
                      <h4 className="text-sm text-text-primary">
                        {interest.label}
                      </h4>
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="pt-6 border-t border-ink-700/50">
              <TerminalPrompt className="mb-4 text-sm">echo "保持联系"</TerminalPrompt>
              <p className="text-text-secondary mb-4 text-sm sm:text-base">
                如果你对我的文章感兴趣，或者有合作的想法，欢迎通过邮件联系我。
              </p>
              <a
                href={`mailto:${author.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400/10 border border-amber-400/50 rounded-lg text-amber-400 font-mono text-sm hover:bg-amber-400/20 transition-all active:scale-95"
              >
                <Mail size={16} />
                发送邮件
              </a>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
