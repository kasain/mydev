var http = require('http'); //http���W���[���Ăяo��
http.createServer(function (request, response) {
    // ���N�G�X�g���󂯂�ƈȉ��̃��X�|���X�𑗐M����
    response.writeHead(200, {'Content-Type': 'text/plain'}); //���X�|���X�w�b�_�[�ɏ�������
    response.end('Hello World\n'); // ���X�|���X�{�f�B�ɏ������݁����X�|���X���M����������
}).listen(process.env.PORT || 8080); //���J�|�[�g�ő҂���
