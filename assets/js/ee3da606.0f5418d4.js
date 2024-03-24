"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[464],{4543:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(1527),n=t(6225);const r={sidebar_position:4,description:"How to preview images in Yazi."},l="Image Preview",o={id:"image-preview",title:"Image Preview",description:"How to preview images in Yazi.",source:"@site/docs/image-preview.md",sourceDirName:".",slug:"/image-preview",permalink:"/docs/image-preview",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/image-preview.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"How to preview images in Yazi."},sidebar:"docsSidebar",previous:{title:"theme.toml",permalink:"/docs/configuration/theme"},next:{title:"Plugins (BETA)",permalink:"/docs/plugins/overview"}},a={},d=[{value:"tmux users",id:"tmux-users",level:2},{value:"Zellij users",id:"zellij-users",level:2},{value:"Windows users",id:"windows-users",level:2},{value:"Windows with WSL users",id:"windows-with-wsl-users",level:2},{value:"Why can&#39;t I preview images via \xdcberzug++?",id:"why-cant-i-preview-images-via-\xfcberzug",level:2},{value:"Why won&#39;t my images adapt to terminal size?",id:"why-wont-my-images-adapt-to-terminal-size",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"image-preview",children:"Image Preview"}),"\n",(0,s.jsx)(i.p,{children:"Yazi has done a lot of work to adapt to different terminals and multiplexers, trying their best to make it out-of-the-box for users."}),"\n",(0,s.jsxs)(i.p,{children:["This is by no means a simple task, to reduce maintenance costs, we only guarantee it is available in the ",(0,s.jsx)(i.strong,{children:"latest version"})," of terminals and multiplexers (tmux, Zellij):"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Platform"}),(0,s.jsx)(i.th,{children:"Protocol"}),(0,s.jsx)(i.th,{children:"Support"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"kitty"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://sw.kovidgoyal.net/kitty/graphics-protocol/#unicode-placeholders",children:"Kitty unicode placeholders"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Konsole"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-adaptor/src/kitty_old.rs",children:"Kitty old protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"iTerm2"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"WezTerm"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Mintty (Git Bash)"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"foot"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.vt100.net/docs/vt3xx-gp/chapter14.html",children:"Sixel graphics format"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Ghostty"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-adaptor/src/kitty_old.rs",children:"Kitty old protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Black Box"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.vt100.net/docs/vt3xx-gp/chapter14.html",children:"Sixel graphics format"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"VSCode"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Tabby"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Hyper"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"X11 / Wayland"}),(0,s.jsx)(i.td,{children:"Window system protocol"}),(0,s.jsx)(i.td,{children:"\u2611\ufe0f \xdcberzug++ required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fallback"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://hpjansson.org/chafa/",children:"Chafa"})}),(0,s.jsx)(i.td,{children:"\u2611\ufe0f \xdcberzug++ required"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["Yazi automatically selects the appropriate preview method for you, based on the priority from top to bottom.\nThat's relying on the ",(0,s.jsx)(i.code,{children:"$TERM"}),", ",(0,s.jsx)(i.code,{children:"$TERM_PROGRAM"}),", and ",(0,s.jsx)(i.code,{children:"$XDG_SESSION_TYPE"})," variables, make sure you don't overwrite them by mistake!"]}),"\n",(0,s.jsxs)(i.p,{children:['For instance, if your terminal is Alacritty, which doesn\'t support displaying images itself, but you are running on an X11/Wayland environment,\nit will automatically use the "Window system protocol" to display images - this requires you to have ',(0,s.jsx)(i.a,{href:"https://github.com/jstkdng/ueberzugpp",children:"\xdcberzug++"})," installed."]}),"\n",(0,s.jsx)(i.h2,{id:"tmux-users",children:"tmux users"}),"\n",(0,s.jsxs)(i.p,{children:["To enable Yazi's image preview to work correctly in tmux, add the following 3 options to your ",(0,s.jsx)(i.code,{children:"tmux.conf"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"set -g allow-passthrough on\n\nset -ga update-environment TERM\nset -ga update-environment TERM_PROGRAM\n"})}),"\n",(0,s.jsx)(i.p,{children:"Then restart tmux (important):"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"tmux kill-server && tmux || tmux\n"})}),"\n",(0,s.jsx)(i.p,{children:"Now you should be able to enjoy with the image preview."}),"\n",(0,s.jsx)(i.h2,{id:"zellij-users",children:"Zellij users"}),"\n",(0,s.jsx)(i.p,{children:"Zellij currently only supports the Sixel graphics format, so you will need a terminal that also supports Sixel."}),"\n",(0,s.jsx)(i.h2,{id:"windows-users",children:"Windows users"}),"\n",(0,s.jsx)(i.p,{children:"Currently, only the following two terminals support displaying images on Windows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"WezTerm"}),"\n",(0,s.jsx)(i.li,{children:"Mintty (Git Bash, which comes with Git for Windows)"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"windows-with-wsl-users",children:"Windows with WSL users"}),"\n",(0,s.jsx)(i.p,{children:"Limited by ConPTY, the Windows edition has had to implement many workarounds, which are not perfect."}),"\n",(0,s.jsxs)(i.p,{children:["However, if you run Yazi in WSL, you can experience perfect image previews using ",(0,s.jsx)(i.code,{children:"wezterm ssh"}),".",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(i.a,{href:"https://wezfurlong.org/wezterm/",children:"WezTerm"})," is an excellent terminal that can bypass the limitations of ConPTY through its SSH feature, and it's currently the only terminal that allows this approach."]}),"\n",(0,s.jsxs)(i.p,{children:["You need to install ",(0,s.jsx)(i.code,{children:"sshd"})," in WSL and start it:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"sudo apt install openssh-server\nsudo service ssh restart\n"})}),"\n",(0,s.jsx)(i.p,{children:"Then, on the host machine, connect to WSL over SSH:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"wezterm ssh 127.0.0.1\n"})}),"\n",(0,s.jsx)(i.p,{children:"That's it! you can now get Yazi's image preview working properly."}),"\n",(0,s.jsx)(i.h2,{id:"why-cant-i-preview-images-via-\xfcberzug",children:"Why can't I preview images via \xdcberzug++?"}),"\n",(0,s.jsxs)(i.p,{children:["This may be an issue with \xdcberzug++, please try running ",(0,s.jsx)(i.code,{children:"ueberzugpp layer"})," directly in the terminal without Yazi, and paste:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:'{"action":"add","identifier":"preview","max_height":0,"max_width":0,"path":"/your/image-path.jpg","x":0,"y":0}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["into it, then press ",(0,s.jsx)(i.code,{children:"Enter"}),", and to see if any image is shown, without exiting the \xdcberzug++. Note that you need to replace ",(0,s.jsx)(i.code,{children:"/your/image-path.jpg"})," with the actual path of an image."]}),"\n",(0,s.jsx)(i.p,{children:"If the image shows properly when using \xdcberzug++ independently, but not when used with Yazi, please create a bug report."}),"\n",(0,s.jsx)(i.h2,{id:"why-wont-my-images-adapt-to-terminal-size",children:"Why won't my images adapt to terminal size?"}),"\n",(0,s.jsx)(i.p,{children:"The size of the image depends on two factors:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.a,{href:"/docs/configuration/yazi#preview.max_width",children:"max_width"})," and ",(0,s.jsx)(i.a,{href:"/docs/configuration/yazi#preview.max_height",children:"max_height"})," config options, which need to be adjusted by the user as needed."]}),"\n",(0,s.jsx)(i.li,{children:"The pixel size of the terminal."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Yazi will use the smaller of these two factors as the image preview size."}),"\n",(0,s.jsxs)(i.p,{children:["However, some terminals (such as VSCode, Tabby, and all Windows terminals) don't implement the ",(0,s.jsx)(i.code,{children:"ioctl"})," system call, before ",(0,s.jsxs)(i.a,{href:"https://github.com/crossterm-rs/crossterm/pull/810",children:["Add ",(0,s.jsx)(i.code,{children:"CSI 14 t"})," sequence support"]})," is merged, it's not possible to obtain the actual pixel width and height of the terminal."]}),"\n",(0,s.jsxs)(i.p,{children:["Hence, only ",(0,s.jsx)(i.code,{children:"max_width"})," and ",(0,s.jsx)(i.code,{children:"max_height"})," will be used in this case."]})]})}function c(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6225:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>l});var s=t(959);const n={},r=s.createContext(n);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);