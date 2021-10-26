<template>
  <header id="commonHeader">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">ねこづきあゆむのうぇぶさいと</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/makes">Makes</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/links">Links</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/contact"
                >Contact</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://blog.nekozuki.me">
              <font-awesome-icon :icon="['fas', 'blog']" />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://twitter.com/nekozuki_2525"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              rel="me"
              href="https://friends.cafe/@nekozuki_2525"
            >
              <font-awesome-icon :icon="['fab', 'mastodon']" />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://www.nicovideo.jp/user/45048152/video"
            >
              <i class="icon2-niconico"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://github.com/AyumuNekozuki"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>