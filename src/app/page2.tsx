export default function Home() {
  return (
    <div className="space-y-12">
      {/* 히어로 섹션 */}
      <section id="hero" className="text-center py-20">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">안녕하세요! 👋</h1>
              <p className="py-6">
                중학교 2학년 개발 지망생입니다.
                웹 개발에 열정을 가지고 계속 성장하고 있어요!
              </p>
              <button className="btn btn-primary">프로젝트 보기</button>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="py-16">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-4">소개</h2>
            <p className="text-lg">
              안녕하세요! 저는 코딩을 사랑하는 중학교 2학년 학생입니다.
              웹 개발을 중심으로 다양한 기술을 배우고 있으며,
              창의적인 프로젝트를 만드는 것을 좋아합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">프로젝트</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">프로젝트 {i}</h3>
                <p>프로젝트 설명이 들어갈 예정입니다.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">자세히 보기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 기술 섹션 */}
      <section id="skills" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">기술 스택</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map((skill) => (
            <div key={skill} className="badge badge-primary badge-lg p-4">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-16">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title text-3xl justify-center mb-4">연락처</h2>
            <p className="text-lg mb-6">프로젝트나 협업에 관심이 있으시면 연락해주세요!</p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-outline">GitHub</button>
              <button className="btn btn-outline">이메일</button>
              <button className="btn btn-outline">Instagram</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
