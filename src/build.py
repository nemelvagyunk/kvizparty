#!/usr/bin/env python3
"""KvízParty build: src/template.html + src/questions/part*.js + PeerJS -> index.html.

Használat a repo gyökeréből:
    npm install          (egyszer, a peerjs miatt)
    python3 src/build.py
"""
import re, pathlib

root = pathlib.Path(__file__).parent.parent   # repo gyökér
src = root / 'src'
tpl = (src/'template.html').read_text(encoding='utf-8')
parts = sorted((src/'questions').glob('part*.js'))
assert parts, 'Hiányzanak a src/questions/part*.js fájlok'
data = ''.join(p.read_text(encoding='utf-8') for p in parts)
peer = (root/'node_modules/peerjs/dist/peerjs.min.js').read_text(encoding='utf-8')

peer = re.sub(r'//# sourceMappingURL=\S+', '', peer)
peer = peer.replace('</script', '<\\/script')
data = data.replace('</script', '<\\/script')

out = tpl.replace('/*__PEERJS__*/', peer).replace('/*__DATA__*/', data)
(root/'index.html').write_text(out, encoding='utf-8')
print('OK', len(out), 'bytes ->', root/'index.html')
