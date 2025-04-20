import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[var(--background)] to-[var(--background)] via-blue-50/10 dark:via-blue-950/10">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--header-bg)] -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-indigo-600/20 backdrop-blur-sm -z-10"></div>
        
        <div className="container mx-auto py-16 md:py-24 text-black">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in tracking-tight">
              吉田和司
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in mb-8" style={{ animationDelay: "0.2s" }}>
              システムデザイン学科の学生 / 流体力学研究室
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                お問い合わせ
              </a>
              <a 
                href="#projects" 
                className="btn btn-primary"
              >
                制作物を見る
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
      </header>

      <main className="flex-grow container mx-auto px-4 md:px-8 py-8 -mt-10 relative z-10">
        {/* Profile Section */}
        <section className="card mb-16 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="section-title">
            基本情報
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold w-28 text-blue-600 dark:text-blue-400">名前:</span>
                  <span className="flex-1">吉田和司</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-28 text-blue-600 dark:text-blue-400">大学:</span>
                  <span className="flex-1">成蹊大学理工学部システムデザイン学科4年</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-28 text-blue-600 dark:text-blue-400">研究室:</span>
                  <span className="flex-1">流体力学研究室</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-28 text-blue-600 dark:text-blue-400">住まい:</span>
                  <span className="flex-1">東京都杉並区</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold w-28 text-blue-600 dark:text-blue-400">誕生日:</span>
                  <span className="flex-1">2002年4月24日</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-28 text-blue-600 dark:text-blue-400">年齢:</span>
                  <span className="flex-1">22歳</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-28 text-blue-600 dark:text-blue-400">趣味:</span>
                  <span className="flex-1">サウナ、ピアノ</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="card mb-16 animate-scale-in" style={{ animationDelay: "0.4s" }} id="skills">
          <h2 className="section-title">
            スキル
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-semibold text-xl mb-4 text-blue-600 dark:text-blue-400 border-b pb-2 border-blue-100 dark:border-blue-900">フロントエンド</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">React</span>
                  <span className="skill-tag bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">Next.js</span>
                  <span className="skill-tag bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">TypeScript</span>
                  <span className="skill-tag bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">Tailwind CSS</span>
                </div>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-semibold text-xl mb-4 text-green-600 dark:text-green-400 border-b pb-2 border-green-100 dark:border-green-900">バックエンド</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">Golang</span>
                  <span className="skill-tag bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">Clang</span>
                  <span className="skill-tag bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">C++</span>
                  <span className="skill-tag bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">Python</span>
                </div>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-semibold text-xl mb-4 text-purple-600 dark:text-purple-400 border-b pb-2 border-purple-100 dark:border-purple-900">その他</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200">Git</span>
                  <span className="skill-tag bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200">LookerStudio</span>
                  <span className="skill-tag bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200">Docker</span>
                  <span className="skill-tag bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200">AWS</span>
                </div>
              </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 animate-scale-in" style={{ animationDelay: "0.5s" }} id="projects">
          <h2 className="section-title">
            制作物
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="project-card overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                  <Link href="https://peach-tech-git-contribution-ranking.vercel.app/" target="_blank" className="flex items-center hover:underline">
                    GitHub コミットランキングサイト
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Image 
                      src="/globe.svg" 
                      alt="GitHub Ranking" 
                      width={30} 
                      height={30} 
                      className="text-blue-500"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    プログラミングサークル内で使用しているGitHubのコミット数を競うランキングサイト
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  メンバー間の活動を可視化し、モチベーション向上に貢献しています。
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-tag bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">React</span>
                  <span className="skill-tag bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">GitHub API</span>
                  <span className="skill-tag bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200">Vercel</span>
                </div>
              </div>
            </div>

            <div className="project-card overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">
                  <Link href="https://kichijojicipherfrontend.vercel.app/" target="_blank" className="flex items-center hover:underline">
                    リアルタイム踏対決ゲーム
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <Image 
                      src="/window.svg" 
                      alt="Real-time Game" 
                      width={30} 
                      height={30} 
                      className="text-purple-500"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    WebSocketを使用したリアルタイム踏対決ゲーム
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  AIによって勝敗がジャッジされるインタラクティブな体験を提供しています。
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-tag bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">WebSocket</span>
                  <span className="skill-tag bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">AI</span>
                  <span className="skill-tag bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200">リアルタイム通信</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-800/50 text-center shadow-inner">
            <div className="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">新しいプロジェクトを追加予定です</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">お楽しみに！</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="card animate-scale-in" style={{ animationDelay: "0.6s" }} id="contact">
          <h2 className="section-title">
            連絡先
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            お問い合わせやプロジェクトの依頼は以下からお願いします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:yoshidakerapo@gmail.com" 
              className="btn btn-primary group"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              メールで連絡する
            </a>
            <a 
              href="https://github.com/yoshiddddd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary group"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              GitHubをチェック
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black -z-10"></div>
        <div className="container mx-auto py-12 px-4 md:px-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">吉田和司</h2>
              <p className="text-gray-400">システムデザイン学科の学生 / 流体力学研究室</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 吉田和司 - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
