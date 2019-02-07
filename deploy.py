import subprocess
process = subprocess.Popen(
    ['git', 'rev-parse', 'HEAD'], shell=False, stdout=subprocess.PIPE)
git_head_hash = process.communicate()[0].strip()
repo_name = "docker-registry.hc.ag/tm/sea-admin:" + git_head_hash

subprocess.call(['docker', 'build', '-t', repo_name, '.'])
subprocess.call(['docker', 'push', repo_name])

subprocess.call(['dmc', 'deploy', '--app', '/tm/sea-admin', '--port',
                 '80', '--image', repo_name, '--provider',
                 'kubernetes', '--cluster', 'development-gce',
                 '--memory', '1024', '--health', '/health',
                 '--strip-prefix', '"true"'])
print "Done"
