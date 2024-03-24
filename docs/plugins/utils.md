---
sidebar_position: 3
description: Learn how to use Yazi's Lua API.
---

# Utils

## ya

### `hide()` {#ya.hide}

Hide Yazi to the secondary screen by returning to the terminal, completely controlled by the requested plugin.

```lua
local permit = ya.hide()
```

This method returns a `permit` for this resource. When it's necessary to restore the TUI display, call its `drop()` method:

```lua
permit:drop()
```

Note that since there's always only one available terminal control resource, `ya.hide()` cannot be called again before the previous `permit` is dropped, otherwise an error will be thrown, effectively avoiding deadlocks.

This function is only available in the async context.

### `file_cache(opts)` {#ya.file_cache}

Calculate the cached [Url](/docs/plugins/types#shared.url) corresponding to the given file:

- `opts` - Required, the options of the cache, which is a table:

  - `file` - The [File](/docs/plugins/types#shared.file) to be cached
  - `skip` - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos

If the file is not allowed to be cached, such as it's ignored in the user config, or the file itself is a cache, returns `nil`.

### `manager_emit(cmd, args, data)` {#ya.manager_emit}

Send a command to the manager without waiting for the executor to execute:

- `cmd` - Required, the command name, which is a string
- `args` - Required, the arguments of the command, which is a table with a number key and string/number value, or a string key and string/number/boolean value
- `data` - Optional, additional data passed to the command

```lua
ya.manager_emit("my-cmd", { "hello", 123, foo = true, bar_baz = "world" })

-- Equivalent to:
-- my-cmd "hello" "123" --foo --bar-baz="world"
```

### `image_show(url, rect)` {#ya.image_show}

Display the given image within the specified area, and the image will downscale to fit that area automatically:

- `url` - Required, the [Url](/docs/plugins/types#shared.url) of the image
- `rect` - Required, the [Rect](/docs/plugins/layout#rect) of the area

This function is only available in the async context.

### `image_precache(src, dist)` {#ya.image_precache}

Pre-cache the image to a specified url based on user-configured [`max_width` and `max_height`](/docs/configuration/yazi#preview):

- `src` - Required, the source [Url](/docs/plugins/types#shared.url) of the image
- `dist` - Required, the destination [Url](/docs/plugins/types#shared.url) of the image

This function is only available in the async context.

### `which(opts)` {#ya.which}

Prompt users with a set of available keys:

- `opts`: Required, the options of the prompt, which is a table:
  - `cands`: Required, the key candidates, which is a table of tables that contains the following fields:
    - `on`: Required, the key to be prompted, which is a string or a table of strings if multiple keys
    - `desc`: Optional, the description of the key, which is a string
  - `silent`: Optional, whether to show the UI of key indicator, which is a boolean

```lua
local cand = ya.which {
	cands = {
		{ on = "a" },
		{ on = "b", desc = "optional description" },
		{ on = "<C-c>", desc = "key combination" },
		{ on = { "d", "e" }, desc = "multiple keys" },
	},
	-- silent = true, -- If you don't want to show the UI of key indicator
}
```

When the user clicks a valid candidate, `ya.which` returns the 1-based index of that `cand`;
otherwise, it returns nil, indicating that the user has canceled the key operation.

This function is only available in the async context.

### `input(opts)` {#ya.input}

Request user input:

- `opts`: Required, the options of the input, which is a table:
  - `title`: Required, the title of the input, which is a string.
  - `value`: Optional, the default value of the input, which is a string.
  - `position`: Required, the position of the input, which is a table:
    - `1`: Required, the origin position of the input, which is a string accepts `"top-left"`, `"top-center"`, `"top-right"`, `"bottom-left"`, `"bottom-center"`, `"bottom-right"`, `"center"`, and `"hovered"`.
    - `x`: Optional, the X offset from the origin position, which is an positive or negative integer.
    - `y`: Optional, the Y offset from the origin position, which is an positive or negative integer.
    - `w`: Required, the width of the input, which is an positive integer.
    - `h`: Optional, the height of the input, which is an positive integer.
  - `realtime`: Optional, whether to report user input in real time, which is a boolean.

```lua
local value, event = ya.input {
	title = "Archive name:",
	position = { "top-center", y = 3, w = 40 },
}
```

Returns `(value, event)`:

- `value` - The user input value carried by this event, which is a string if the `event` is non-zero; otherwise, `nil`.
- `event` - The event type, which is an integer:
  - 0: Unknown error.
  - 1: The user has confirmed the input.
  - 2: The user has canceled the input.
  - 3: The user has changed the input (only if `realtime` is true).

When `realtime = true` specified, `ya.input()` returns a receiver, which has a `recv()` method that can be called multiple times to receive events.

```lua
local input = ya.input {
	title = "Input in realtime:",
	position = { "center", w = 50 },
	realtime = true,
}

while true do
	local value, event = input:recv()
	if not value then
		break
	end

	ya.err(value)
end
```

This function is only available in the async context.

### `notify(opts)` {#ya.notify}

Send a foreground notification to the user:

- `opts`: Required, the options of the notification, which is a table:
  - `title`: Required, the title of the notification, which is a string.
  - `content`: Required, the content of the notification, which is a string.
  - `timeout`: Required, the timeout of the notification, which is an non-negative float in seconds.
  - `level`: Optional, the level of the notification, which is a string accepts `"info"`, `"warn"`, and `"error"`. Default is `"info"`.

```lua
ya.notify {
	title = "Hello, World!",
	content = "This is a notification from Lua!",
	timeout = 6.5,
	-- level = "info",
}
```

### `dbg(msg, ...)` {#ya.dbg}

Append messages to [the log file](/docs/plugins/overview#logging) at the debug level:

- `msg` - Required, the message to be logged.

```lua
ya.dbg("Hello", "World!")                       -- Multiple arguments are supported
ya.dbg({ foo = "bar", baz = 123, qux = true })  -- Any type of data is supported
```

Note that if you use a release build of Yazi, the log level is "error" instead of "debug", so you'll need to use [`ya.err`](#ya.err).

### `err(msg, ...)` {#ya.err}

Append messages to [the log file](/docs/plugins/overview#logging) at the error level:

- `msg` - Required, the message to be logged.

```lua
ya.err("Hello", "World!")                       -- Multiple arguments are supported
ya.err({ foo = "bar", baz = 123, qux = true })  -- Any type of data is supported
```

### `sync(fn)` {#ya.sync}

See [Async context](/docs/plugins/overview#async-context).

### `preview_code(opts)` {#ya.preview_code}

Preview the file as code into the specified area:

- `opts` - Required, the options of the preview, which is a table:
  - `file` - The previewed [File](/docs/plugins/types#shared.file)
  - `area` - The area of the preview, which is a [Rect](/docs/plugins/layout#rect)
  - `skip` - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos
  - `window` - The [Window](/docs/plugins/types#shared.window) of the preview

Returns `(ok, upper_bound)`:

- `ok` - Whether the preview is successful, which is a boolean.
- `upper_bound` - If the preview fails (`ok = false`) and it's because exceeds the maximum upper bound, return this bound; otherwise, `nil`.

This function is only available in the async context.

### `preview_archive(opts)` {#ya.preview_archive}

Preview the file as an archive into the specified area:

- `opts` - Required, the options of the preview. It's the same as [`preview_code()`](#ya.preview_code)

Returns `(ok, upper_bound)`:

- `ok` - Whether the preview is successful, which is a boolean.
- `upper_bound` - If the preview fails (`ok = false`) and it's because exceeds the maximum upper bound, return this bound; otherwise, `nil`.

This function is only available in the async context.

### `preview_widgets(opts, widgets)` {#ya.preview_widgets}

- `opts` - Required, the options of the preview, which is a table:
  - `file` - The previewed [File](/docs/plugins/types#shared.file)
  - `skip` - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos
  - `window` - The [Window](/docs/plugins/types#shared.window) of the preview
- `widgets` - List of renderable widgets, such as `{ ui.Paragraph {...}, ui.List {...}, ... }`

This function is only available in the async context.

### `target_family()` {#ya.target_family}

Returns the target family of the current platform, `"windows"`, `"unix"`, or `"wasm"`.

### `quote(str)` {#ya.quote}

Quote characters that may have special meaning in a shell:

- `str`: Required, the string to be quoted, which is a string

```lua
local handle = io.popen("ls " .. ya.quote(filename))
```

### `truncate(text, opts)` {#ya.truncate}

Truncate the text to the specified length and return it:

- `text` - Required, the text to be truncated, which is a string.
- `opts` - Required, the options of the truncation, which is a table:
  - `max` - Required, the maximum length of the text, which is an integer.
  - `rtl` - Optional, whether the text is right-to-left, which is a boolean.

### `time()` {#ya.time}

Returns the current timestamp, which is a float, the integer part represents the seconds, and the decimal part represents the milliseconds.

### `sleep(secs)` {#ya.sleep}

Waits until `secs` has elapsed:

- `secs`: Required, the number of seconds to sleep, which is a positive float

```lua
ya.sleep(0.5)  -- Sleep for 500 milliseconds
```

This function is only available in the async context.

### `uid()` {#ya.uid}

Only available on Unix-like systems. Returns the user id of the current user, which is an integer.

### `gid()` {#ya.gid}

Only available on Unix-like systems. Returns the group id of the current user, which is an integer.

### `user_name(uid)` {#ya.user_name}

Get the name of the user:

- `uid` - Optional, the user id of the user, which is an integer. If not set, it will use the current user's id.

Returns the name of the current user, which is a string if successful; otherwise, `nil`.

This function is only available on Unix-like systems.

### `group_name(gid)` {#ya.group_name}

Get the name of the user group:

- `gid` - Optional, the group id of the user, which is an integer. If not set, it will use the current user's group id.

Returns the name of the current group, which is a string if successful; otherwise, `nil`.

This function is only available on Unix-like systems.

### `host_name()` {#ya.host_name}

Only available on Unix-like systems. Returns the hostname of the current machine, which is a string if successful; otherwise, `nil`.

## fs

The following functions can only be used within an async context.

### `write(url, data)` {#fs.write}

```lua
local ok, err = fs.write(url, "hello world")
```

Write data to the specified file:

- `url` - Required, the [Url](/docs/plugins/types#shared.url) of the file
- `data` - Required, the data to be written, which is a string

Returns `(ok, err)`:

- `ok` - Whether the operation is successful, which is a boolean
- `err` - The error code if the operation is failed, which is an integer if any

### `cha(url)` {#fs.cha}

```lua
local cha, err = fs.cha(url)
```

Get the [Cha](/docs/plugins/types#shared.cha) of the specified file, which is faster than [`cha_follow()`](#fs.cha_follow) since it never follows the symbolic link:

- `url` - Required, the [Url](/docs/plugins/types#shared.url) of the file

Returns `(cha, err)`:

- `cha` - The [Cha](/docs/plugins/types#shared.cha) of the file if successful; otherwise, `nil`
- `err` - The error code if the operation is failed, which is an integer if any

### `cha_follow(url)` {#fs.cha_follow}

```lua
local cha, err = fs.cha_follow(url)
```

Get the [Cha](/docs/plugins/types#shared.cha) of the specified file, and follow the symbolic link:

- `url` - Required, the [Url](/docs/plugins/types#shared.url) of the file

Returns `(cha, err)`:

- `cha` - The [Cha](/docs/plugins/types#shared.cha) of the file if successful; otherwise, `nil`
- `err` - The error code if the operation is failed, which is an integer if any

## Command

You can invoke external programs through:

```lua
local child, err = Command("ls")
	:args({ "-a", "-l" })
	:stdout(Command.PIPED)
	:spawn()
```

Compared to Lua's `os.execute`, it provides many comprehensive and convenient methods, and the entire process is async.

It takes better advantage of the benefits of concurrent scheduling. However, it can only be used in async contexts, such as preloaders, previewers, and async functional plugins.

### `arg(arg)` {#Command.arg}

```lua
local cmd = Command("ls"):arg("-a"):arg("-l")
```

Append an argument to the command:

- `arg` - Required, the argument to be appended, which is a string

Returns `self`.

### `args(args)` {#Command.args}

```lua
local cmd = Command("ls"):args({ "-a", "-l" }):args({ "-h" })
```

Append multiple arguments to the command:

- `args` - Required, the arguments to be appended, which is a table of strings

Returns `self`.

### `cwd(dir)` {#Command.cwd}

```lua
local cmd = Command("ls"):cwd("/root")
```

Set the current working directory of the command:

- `dir` - Required, the directory of the command, which is a string

Returns `self`.

### `env(key, value)` {#Command.env}

```lua
local cmd = Command("ls"):env("PATH", "/bin"):env("HOME", "/home")
```

Append an environment variable to the command:

- `key` - Required, the key of the environment variable, which is a string
- `value` - Required, the value of the environment variable, which is a string

Returns `self`.

### `stdin(cfg)` {#Command.stdin}

```lua
local cmd = Command("ls"):stdin(Command.PIPED)
```

Set the stdin of the command:

- `cfg` - Required, the configuration of the stdin, accepts the following values:
  - `Command.PIPED` - Pipe the stdin
  - `Command.NULL` - Discard the stdin
  - `Command.INHERIT` - Inherit the stdin

If not set, the stdin will be null. Returns `self`.

### `stdout(cfg)` {#Command.stdout}

```lua
local cmd = Command("ls"):stdout(Command.PIPED)
```

Set the stdout of the command:

- `cfg` - Required, the configuration of the stdout, accepts the following values:
  - `Command.PIPED` - Pipe the stdout
  - `Command.NULL` - Discard the stdout
  - `Command.INHERIT` - Inherit the stdout

If not set, the stdout will be null. Returns `self`.

### `stderr(cfg)` {#Command.stderr}

```lua
local cmd = Command("ls"):stderr(Command.PIPED)
```

Set the stderr of the command:

- `cfg` - Required, the configuration of the stderr, accepts the following values:
  - `Command.PIPED` - Pipe the stderr
  - `Command.NULL` - Discard the stderr
  - `Command.INHERIT` - Inherit the stderr

If not set, the stderr will be null. Returns `self`.

### `spawn()` {#Command.spawn}

```lua
local child, err = Command("ls"):spawn()
```

Spawn the command, returns `(child, err)`:

- `child` - The [Child](#child) of the command if successful; otherwise, `nil`
- `err` - The error code if the operation is failed, which is an integer if any

### `output()` {#Command.output}

```lua
local output, err = Command("ls"):output()
```

Spawn the command and wait for it to finish, returns `(output, err)`:

- `output` - The [Output](#output) of the command if successful; otherwise, `nil`
- `err` - The error code if the operation is failed, which is an integer if any

## Child

This object is created by [`Command:spawn()`](#Command.spawn) and represents a running child process.

You can access the runtime data of this process through its proprietary methods.

### `read(len)` {#Child.read}

```lua
local data, event = child:read(1024)
```

Let's say "available data source" refers to `stdout` or `stderr` that has been set with `Command.PIPED`, or them both.

`read()` reads data from the available data source alternately, and the `event` indicates the source of the data:

- The data comes from stdout if event is 0
- The data comes from stderr if event is 1
- There's no data to read from both stdout and stderr, if event is 2

### `read_line()` {#Child.read_line}

```lua
local line, event = child:read_line()
```

Similar to [`read()`](#Child.read), but it reads data line by line.

### `read_line_with(opts)` {#Child.read_line_with}

```lua
local line, event = child:wait_line_with { timeout = 500 }
```

Similar to [`read_line()`](#Child.read_line), but it accepts a table of options:

- `timeout` - Required, timeout in milliseconds, which is an integer

And includes the following additional events:

- Timeout if event is 3

### `wait()` {#Child.wait}

```lua
local status, err = child:wait()
```

Wait for the child process to finish, returns `(status, err)`:

- `status` - The [Status](#status) of the child process if successful; otherwise, `nil`
- `err` - The error code if the operation is failed, which is an integer if any

### `start_kill()` {#Child.start_kill}

```lua
local ok, err = child:start_kill()
```

Send a SIGTERM signal to the child process, returns `(ok, err)`:

- `ok` - Whether the operation is successful, which is a boolean
- `err` - The error code if the operation is failed, which is an integer if any

## Output

Properties:

- `status`: The [Status](#status) of the child process
- `stdout`: The stdout of the child process, which is a string
- `stderr`: The stderr of the child process, which is a string

## Status

This object represents the exit status of a child process, and it is created by [`wait()`](#Child.wait), or [`output()`](#Command.output).

### `success()` {#Status.success}

```lua
local ok = status:success()
```

Returns whether the child process exited successfully, which is a boolean.

### `code()` {#Status.code}

```lua
local code = status:code()
```

Returns the exit code of the child process, which is an integer if any.
