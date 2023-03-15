<?php

require __DIR__ . '/../../vendor/autoload.php';

if (!function_exists('vite_asset')) {
    /**
     * Get assets build by Vite.
     *
     * @param string $path The path to the asset. Example: 'resources/js/app.js'.
     * @param bool|null $secure Whether to use HTTPS.
     * @return string
     * @throws Exception
     */
    function vite_asset(string $path, bool $secure = null): string
    {
        $manifest = json_decode(file_get_contents(public_path('/build/manifest.json')), true);

        if (!isset($manifest[$path])) {
            throw new Exception("Unable to locate manifest file: {$path}. Is the builder done?");
        }

        if (isset($manifest[$path])) {
            return asset('/build/' . $manifest[$path]['file'], $secure);
        }

        throw new Exception('Unknown Vite asset: ' . $path);
    }
}
