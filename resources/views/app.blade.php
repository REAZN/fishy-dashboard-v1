<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    @if (config('app.env') === 'local')
    <script type="module">
        import RefreshRuntime from "http://127.0.0.1:5173/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>
    @endif
    
    @vite('resources/js/app.tsx')
    @inertiaHead
  </head>
  <body class="bg-gray-100 h-full">
    @inertia
  </body>
</html>