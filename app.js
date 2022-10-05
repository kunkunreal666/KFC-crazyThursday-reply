const $ = s => document.querySelector(s)

$("#form").addEventListener("submit", (e) => {
  e.preventDefault()
  const name = $('#name').value.trim()
  const event = $('#event').value.trim()
  const other = $('#other').value.trim()
  const url = new URL(location.href)
  url.searchParams.set("name", name)
  url.searchParams.set("event", event)
  url.searchParams.set("other", other)
  history.pushState({}, document.title, url.href)
  render(name, event, other)
})

$("#copy").addEventListener("click", async (e) => {
  e.preventDefault()
  await navigator.clipboard.writeText($('#result').innerText);
  $("#copy").blur()
  $(".octicon-clippy").style.display = "none";
  $(".octicon-check").style.display = "inline-block";
  setTimeout(() => {
    $(".octicon-clippy").style.display = "inline-block";
    $(".octicon-check").style.display = "none";
  }, 2000);
})

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search)
  const name = params.get("name")
  const event = params.get("event")
  const other = params.get("other")
  $('#name').value = name
  $('#event').value = event
  $('#other').value = other
  render(name, event, other)
})

function render(name, event, other) {
  if (name && event && other) {
    $('#result').innerHTML = `<p>
            我是${name}马上疯狂星期四要来了，需要你V我50助我一臂之力。${name}是羊了个羊的游戏设计师，${name}今天我被公司开除了
        </p>
        <p>
            ${name}原因其实就是因为我掌握着第二关的通关密码，所有人都追着我，我现在无处可藏，只能向你求助。只要你现在V${name}50等到了疯狂星期四，你V我50，我就把羊了个羊第二关的通关秘籍传给你。
        </p>
        <p>
            前100名V50的。送您通关大礼包。让您不会像其他人过900+次还卡第二关。
        </p>`
  }
}
