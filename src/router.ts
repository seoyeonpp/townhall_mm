import Home from './pages/home'
import Talk from './pages/talk'
const routes = {
  '/': Home,
  '/talk': Talk,
}

function router() {
  const path = window.location.pathname
  const route = routes[path as keyof typeof routes]
  document.getElementById('app')!.innerHTML = route ? route() : '<h1>404 - Page Not Found</h1>'
}

// 링크 클릭 시
document.addEventListener('click', (e) => {
  if (e.target && (e.target as HTMLElement).matches?.('a')) {
    e.preventDefault()
    history.pushState(null, '', (e.target as HTMLAnchorElement).href)
    router()
  }
})

// 뒤로가기 대응
window.addEventListener('popstate', router)
router()
