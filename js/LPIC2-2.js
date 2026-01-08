const preguntasLPIC2_2 = [
  {
    "question": "1. En un router Linux, se ha habilitado el reenvío de paquetes para IPv4. Tras un reinicio, la máquina ya no reenvía paquetes IP de otros hosts. El comando 'echo 1 > /proc/sys/net/ipv4/ip_forward' resuelve el problema temporalmente. ¿Cuál de las siguientes opciones es la mejor manera de asegurar que este ajuste se mantenga tras los reinicios?",
    "options": [
      "A. Añadir echo 1 > /proc/sys/net/ipv4/ip_forward al script de inicio de sesión del usuario root",
      "B. Añadir echo 1 > /proc/sys/net/ipv4/ip_forward a cualquier script de inicio de sesión de usuario",
      "C. En /etc/sysctl.conf, cambiar net.ipv4.ip_forward a 1",
      "D. En /etc/rc.local, añadir net.ipv4.ip_forward = 1",
      "E. En /etc/sysconfig/iptables-config, añadir ipv4.ip_forward = 1"
    ],
    "answer": "C",
    "explicacion": "El archivo /etc/sysctl.conf es el lugar estándar para definir parámetros del kernel de forma persistente.",
    "pista": "Piensa en el archivo de configuración de sysctl."
  },
  {
    "question": "2. ¿Qué información se puede encontrar en el archivo especificado por el parámetro 'status' en un archivo de configuración de servidor OpenVPN? (Elige dos)",
    "options": [
      "A. Errores y advertencias generados por el demonio openvpn",
      "B. Información de enrutamiento",
      "C. Información estadística sobre el demonio openvpn en ejecución",
      "D. Una lista de los clientes conectados actualmente",
      "E. Un historial de todos los clientes que se han conectado en algún momento"
    ],
    "answer": "B, D",
    "explicacion": "El archivo de estado de OpenVPN muestra las rutas virtuales actuales y los clientes que están conectados en tiempo real.",
    "pista": "Muestra quién está conectado y sus rutas."
  },
  {
    "question": "3. ¿Cuál de las siguientes líneas en el archivo de configuración de sshd debería cambiarse, si está presente, para aumentar la seguridad del servidor? (Elige dos)",
    "options": [
      "A. Protocol 2, 1",
      "B. PermitEmptyPasswords no",
      "C. Port 22",
      "D. PermitRootLogin yes",
      "E. IgnoreRhosts yes"
    ],
    "answer": "A, D",
    "explicacion": "Permitir el protocolo 1 (inseguro) y permitir el acceso directo como root son prácticas de alto riesgo que deben evitarse.",
    "pista": "Desactiva protocolos antiguos y el acceso root directo."
  },
  {
    "question": "4. ¿Cuáles de los siguientes parámetros de nmap escanean un objetivo en busca de puertos TCP abiertos? (Elige dos)",
    "options": [
      "A. -sO",
      "B. -sZ",
      "C. -sT",
      "D. -sU",
      "E. -sS"
    ],
    "answer": "C, E",
    "explicacion": "-sT realiza un escaneo TCP Connect y -sS un escaneo TCP SYN.",
    "pista": "Scan Connect y Scan SYN."
  },
  {
    "question": "5. ¿Qué afirmaciones son correctas respecto a los siguientes comandos ejecutados en un router Linux? (Elige dos)\nip6tables -A FORWARD -s fe80::/64 -j DROP\nip6tables -A FORWARD -d fe80::/64 -j DROP",
    "options": [
      "A. Los paquetes con direcciones de origen o destino fe80::/64 nunca aparecerán en la cadena FORWARD",
      "B. Las reglas desactivan el reenvío porque los nodos usan fe80::/64 para identificar routers",
      "C. ip6tables devuelve un error en el segundo comando porque la red ya es parte de otra regla",
      "D. Ambos comandos ip6tables se completan sin mensajes de error ni advertencias",
      "E. Las reglas suprimen cualquier configuración automática a través de anuncios de router o DHCPv6"
    ],
    "answer": "D, E",
    "explicacion": "Los comandos son sintácticamente correctos (D) y al bloquear el tráfico link-local se impide la autoconfiguración IPv6 (E).",
    "pista": "La sintaxis es válida y afecta a la autoconfiguración."
  },
  {
    "question": "6. ¿Qué opción en el archivo de configuración del cliente le diría a OpenVPN que use un puerto de origen dinámico al conectar con un par?",
    "options": [
      "A. src-port",
      "B. remote",
      "C. source-port",
      "D. nobind",
      "E. dynamic-bind"
    ],
    "answer": "D",
    "explicacion": "La directiva 'nobind' evita que el cliente se vincule a un puerto local específico, permitiendo uno dinámico.",
    "pista": "Asignar puerto dinámico."
  },
  {
    "question": "7. ¿Qué usuario de Linux utiliza vsftpd para realizar operaciones en el sistema de archivos para los usuarios FTP anónimos?",
    "options": [
      "A. El usuario de Linux que ejecuta el proceso vsftpd",
      "B. El usuario de Linux propietario del directorio raíz FTP",
      "C. El usuario de Linux con el mismo nombre usado para el login anónimo",
      "D. El usuario root, pero vsftpd otorga acceso solo a archivos con permisos globales",
      "E. El usuario de Linux especificado en la opción ftp_username"
    ],
    "answer": "E",
    "explicacion": "vsftpd utiliza el usuario definido en ftp_username (por defecto 'ftp') para manejar a los anónimos.",
    "pista": "Se define en una variable de configuración específica de usuario."
  },
  {
    "question": "8. ¿Qué configuraciones de sshd deberían establecerse en 'no' para desactivar completamente los inicios de sesión basados en contraseña? (Elige dos)",
    "options": [
      "A. PAMAuthentication",
      "B. ChallengeResponseAuthentication",
      "C. PermitPlaintextLogin",
      "D. UsePasswords",
      "E. PasswordAuthentication"
    ],
    "answer": "B, E",
    "explicacion": "Desactivar PasswordAuthentication y ChallengeResponseAuthentication obliga al uso de llaves.",
    "pista": "Desactiva autenticación por contraseña y desafío/respuesta."
  },
  {
    "question": "9. Cuando la política por defecto para la cadena INPUT es DROP, ¿por qué debería existir una regla que permita el tráfico a localhost?",
    "options": [
      "A. Todo el tráfico a localhost debe estar siempre permitido",
      "B. No importa; netfilter nunca afecta a los paquetes dirigidos a localhost",
      "C. Algunas aplicaciones usan la interfaz localhost para comunicarse con otras aplicaciones",
      "D. syslogd recibe mensajes en localhost",
      "E. El comando iptables se comunica con netfilterd en localhost"
    ],
    "answer": "C",
    "explicacion": "Muchos servicios internos dependen del loopback para la comunicación entre procesos locales.",
    "pista": "Comunicación entre aplicaciones locales."
  },
  {
    "question": "10. ¿Qué comando crea un par de llaves SSH? (Especifica SOLO el comando)",
    "options": [],
    "answer": "ssh-keygen",
    "explicacion": "ssh-keygen es la herramienta para generar llaves públicas y privadas para SSH.",
    "pista": "Comando para generar llaves."
  },
  {
    "question": "11. ¿El contenido de qué archivo local debe transmitirse a un servidor SSH remoto para poder entrar usando llaves SSH?",
    "options": [
      "A. ~/.ssh/authorized_keys",
      "B. ~/.ssh/config",
      "C. ~/.ssh/id_rsa.pub",
      "D. ~/.ssh/id_rsa",
      "E. ~/.ssh/known_hosts"
    ],
    "answer": "A",
    "explicacion": "Aunque normalmente enviamos id_rsa.pub, según la fuente oficial, el contenido debe acabar en el archivo authorized_keys del remoto.",
    "pista": "Archivo donde se guardan las llaves autorizadas."
  },
  {
    "question": "12. ¿Cuál es el nombre del proyecto de escáner de seguridad de red que es un servidor con un conjunto de pruebas de vulnerabilidad?",
    "options": [
      "A. NetMap",
      "B. OpenVAS",
      "C. Smartscan",
      "D. Wireshark"
    ],
    "answer": "B",
    "explicacion": "OpenVAS es un framework de varios servicios y herramientas que ofrece una solución de escaneo de vulnerabilidades.",
    "pista": "Escáner de vulnerabilidades abierto."
  },
  {
    "question": "13. Con fail2ban, ¿qué es un 'jail'?",
    "options": [
      "A. Una cadena de reglas netfilter que bloquea IPs para un servicio particular",
      "B. Un grupo de servicios que deben ser monitorizados por patrones de ataque similares",
      "C. Una definición de filtro y un conjunto de una o más acciones a tomar cuando coincide",
      "D. El entorno chroot en el que se ejecuta fail2ban"
    ],
    "answer": "C",
    "explicacion": "Un 'jail' en fail2ban combina un filtro (qué buscar) con acciones (qué hacer).",
    "pista": "Filtro + Acciones."
  },
  {
    "question": "14. El programa vsftpd, ejecutándose en un chroot jail, da un error de 'error while loading shared libraries: libc.so.6'. ¿Qué acción corregiría esto?",
    "options": [
      "A. El archivo /etc/ld.so.conf debe contener la ruta a la biblioteca en el jail",
      "B. Crear un enlace simbólico a la biblioteca fuera del chroot jail",
      "C. Copiar la biblioteca requerida al directorio lib apropiado dentro del chroot jail",
      "D. Ejecutar el programa usando chroot con la opción --static_libs"
    ],
    "answer": "C",
    "explicacion": "En un chroot, el proceso no puede ver archivos fuera de su raíz, por lo que las bibliotecas deben estar dentro.",
    "pista": "El proceso solo ve lo que hay dentro de su jaula."
  },
  {
    "question": "15. ¿Cuál de los siguientes parámetros de configuración de Samba es funcionalmente idéntico al parámetro 'read only=yes'?",
    "options": [
      "A. browseable = no",
      "B. read write = no",
      "C. writeable = no",
      "D. write only = no",
      "E. write access = no"
    ],
    "answer": "C",
    "explicacion": "'read only = yes' y 'writable = no' son sinónimos en la configuración de recursos de Samba.",
    "pista": "Si solo es de lectura, no es escribible."
  },
  {
    "question": "16. ¿Cómo debe configurarse Samba para que pueda verificar contraseñas CIFS contra las de /etc/passwd y /etc/shadow?",
    "options": [
      "A. Establecer 'encrypt passwords = yes' y 'password algorithm = crypt'",
      "B. Establecer 'encrypt passwords = yes' y 'password file = /etc/passwd'",
      "C. Borrar el archivo smbpasswd y crear un enlace simbólico a passwd y shadow",
      "D. No es posible para Samba usar /etc/passwd y /etc/shadow directamente",
      "E. Ejecutar smbpasswd para convertir los archivos a un formato de Samba"
    ],
    "answer": "D",
    "explicacion": "Debido a que CIFS usa hashes de contraseña diferentes (NTLM), Samba no puede validar contraseñas cifradas de Linux directamente.",
    "pista": "Linux y Samba usan métodos de cifrado distintos."
  },
  {
    "question": "17. ¿En qué recurso compartido CIFS deben colocarse los controladores de impresora para permitir el despliegue Point'n'Print en Windows?",
    "options": [
      "A. winx64drv$",
      "B. print$",
      "C. El nombre especificado en 'print driver share' en smb.conf",
      "D. pnpdrivers$",
      "E. NETLOGON"
    ],
    "answer": "B",
    "explicacion": "El recurso print$ es el nombre estándar que Windows busca para descargar controladores de impresora.",
    "pista": "Recurso estándar para drivers de impresión."
  },
  {
    "question": "18. ¿Cuál de los siguientes servicios de Samba maneja la membresía de un servidor de archivos en un dominio de Active Directory?",
    "options": [
      "A. winbindd",
      "B. nmbd",
      "C. msadd",
      "D. admemb",
      "E. samba"
    ],
    "answer": "E",
    "explicacion": "En versiones modernas de Samba (Samba 4), el proceso 'samba' gestiona la integración con AD.",
    "pista": "El nombre del propio paquete principal."
  },
  {
    "question": "19. ¿Qué afirmación es verdadera respecto al sistema de archivos pseudo NFSv4 en el servidor NFS?",
    "options": [
      "A. Debe llamarse /exports",
      "B. Normalmente contiene montajes 'bind' de los árboles de directorios a exportar",
      "C. Debe ser una partición dedicada en el servidor",
      "D. Se define en la opción Nfsv4-Root en /etc/pathmapd.conf",
      "E. Normalmente contiene enlaces simbólicos a los directorios a exportar"
    ],
    "answer": "B",
    "explicacion": "NFSv4 utiliza un único árbol de exportación (pseudo-root) y los 'bind mounts' permiten mapear directorios a ese árbol.",
    "pista": "Mapeo de directorios mediante 'bind'."
  },
  {
    "question": "20. Un usuario solicita un recurso Samba 'oculto' llamado 'confidential', similar al recurso de administración de Windows. ¿Cómo se configura?",
    "options": [
      "A. [confidential]",
      "B. [ confidential]",
      "C. [#confidential]",
      "D. [  confidential]",
      "E. [confidential$]"
    ],
    "answer": "E",
    "explicacion": "Añadir un símbolo de dólar ($) al final del nombre de un recurso compartido hace que no aparezca en las búsquedas de red.",
    "pista": "Usa el símbolo del dólar."
  },
  {
    "question": "21. ¿Qué opciones son válidas en /etc/exports? (Elige dos)",
    "options": [
      "A. rw",
      "B. ro",
      "C. rootsquash",
      "D. norootsquash",
      "E. uid"
    ],
    "answer": "A, B",
    "explicacion": "rw (lectura/escritura) y ro (solo lectura) son opciones básicas para definir permisos de exportación.",
    "pista": "Permisos básicos de lectura y escritura."
  },
  {
    "question": "22. ¿Qué comando se utiliza para configurar qué sistemas de archivos pone un servidor NFS a disposición de los clientes?",
    "options": [
      "A. exportfs",
      "B. mkfs.nfs",
      "C. mount",
      "D. nfsservctl",
      "E. telinit"
    ],
    "answer": "A",
    "explicacion": "exportfs mantiene la tabla de sistemas de archivos exportados para NFS.",
    "pista": "Comando para exportar sistemas de archivos."
  },
  {
    "question": "23. ¿Cuál de estas herramientas, sin opciones, proporciona más información al realizar consultas DNS?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "A",
    "explicacion": "dig (Domain Information Groper) ofrece por defecto una salida mucho más detallada que host o nslookup.",
    "pista": "A ferramenta favorita para depuração DNS."
  },
  {
    "question": "24. Al hacer un DNS lookup con 'dig', el registro PTR parece estar mal configurado en la zona inversa. ¿Cuál es el error común?",
    "options": [
      "A. No hay un punto después del nombre en la zona de búsqueda directa",
      "B. Falta el nombre del host en el registro PTR",
      "C. Falta el punto final tras el nombre del host en el registro PTR de la zona inversa",
      "D. Se debe eliminar la definición NS en la zona inversa"
    ],
    "answer": "C",
    "explicacion": "En los archivos de zona de BIND, los nombres FQDN deben terminar con un punto (.) o se les añade el origen automáticamente.",
    "pista": "O ponto final é crucial."
  },
  {
    "question": "25. ¿Qué opción para BIND es necesaria en las opciones globales para desactivar las consultas recursivas por defecto?",
    "options": [
      "A. allow-recursive-query (none; );",
      "B. allow-recursive-query off;",
      "C. recursion { disabled; };",
      "D. recursion { none; };",
      "E. recursion no;"
    ],
    "answer": "E",
    "explicacion": "La directiva 'recursion no;' desactiva la recursividad en el servidor DNS.",
    "pista": "Recursão não."
  },
  {
    "question": "26. ¿Cuál de los siguientes registros DNS podría ser un 'glue record' (registro de pegamento)?",
    "options": [
      "A. ns1.lab A 198.51.100.53",
      "B. lab NS 198.51.100.53",
      "C. ns1.lab NS 198.51.100.53",
      "D. ns1. A 198.51.100.53",
      "E. ns1.lab GLUE 198.51.100.53"
    ],
    "answer": "A",
    "explicacion": "Un registro de pegamento es un registro A que proporciona la IP de un servidor de nombres mencionado en un registro NS.",
    "pista": "Registo A para um servidor de nomes."
  },
  {
    "question": "27. ¿Para qué se utiliza DNSSEC?",
    "options": [
      "A. Consultas DNS cifradas entre servidores",
      "B. Autenticación criptográfica de zonas DNS",
      "C. Consultas DNS secundarias para zonas locales",
      "D. Autenticación del usuario que inició la consulta",
      "E. Cifrado de consultas y respuestas DNS"
    ],
    "answer": "B",
    "explicacion": "DNSSEC añade firmas digitales a los registros DNS para asegurar que la información no ha sido alterada.",
    "pista": "Segurança e autenticação de registos."
  },
  {
    "question": "28. ¿Qué palabra falta en el siguiente extracto de un archivo named.conf?\nfriends {\n 10.10.0.0/24; 192.168.1.0/24;\n};",
    "options": [
      "A. networks",
      "B. net",
      "C. list",
      "D. acl",
      "E. group"
    ],
    "answer": "D",
    "explicacion": "La directiva 'acl' define listas de control de acceso para usar en otras partes de la configuración.",
    "pista": "Access Control List."
  },
  {
    "question": "29. En un archivo de zona de BIND, ¿qué indica el carácter @?",
    "options": [
      "A. El nombre de host completo (FQDN) del servidor DNS",
      "B. Un alias para el correo electrónico del maestro de zona",
      "C. El nombre de la zona definido en la sentencia 'zone' de named.conf",
      "D. Se usa para crear un alias entre dos entradas CNAME"
    ],
    "answer": "C",
    "explicacion": "El símbolo @ representa el origen (ORIGIN) actual, que suele ser el nombre de la zona.",
    "pista": "Representa a origem da zona."
  },
  {
    "question": "30. ¿Qué opción de BIND debe usarse para limitar las direcciones IP desde las cuales los servidores esclavos pueden conectarse?",
    "options": [
      "A. allow-zone-transfer",
      "B. allow-transfer",
      "C. allow-secondary",
      "D. allow-slaves",
      "E. allow-queries"
    ],
    "answer": "B",
    "explicacion": "'allow-transfer' especifica qué hosts tienen permiso para solicitar una transferencia de zona.",
    "pista": "Permitir transferência."
  },
  {
    "question": "31. Para proteger un directorio en un servidor Apache con contraseña, se añadió esta configuración a un archivo .htaccess: \nAuthType Basic\nAuthName \"Protected Directory\"\nAuthUserFile /var/www/dir/.htpasswd\nRequire valid-user\nAdemás, se creó el archivo /var/www/dir/.htpasswd con el contenido 'usera: S3cr3t'. ¿Cuál de las siguientes afirmaciones es cierta?",
    "options": [
      "A. El usuario usera puede acceder al sitio usando la contraseña s3cr3t",
      "B. Acceder al directorio como usera genera el error HTTP 442 (User Not Existent)",
      "C. Las peticiones son respondidas con el código de error HTTP 500 (Internal Server Error)",
      "D. El navegador solicita usuario y contraseña pero el login para usera no parece funcionar",
      "E. El servidor web entrega el contenido del directorio sin solicitar autenticación"
    ],
    "answer": "A",
    "explicacion": "Si los archivos están configurados correctamente, Apache procesará la autenticación básica.",
    "pista": "A configuração padrão para proteção por senha."
  },
  {
    "question": "32. ¿Qué directiva de Apache HTTPD habilita el soporte para el protocolo HTTPS?",
    "options": [
      "A. HTTPSEngine on",
      "B. SSLEngine on",
      "C. SSLEnable on",
      "D. HTTPSEnable on",
      "E. StartTLS on"
    ],
    "answer": "B",
    "explicacion": "SSLEngine es la directiva principal del módulo mod_ssl para activar el motor de cifrado SSL/TLS.",
    "pista": "Relacionado com SSL Engine."
  },
  {
    "question": "33. ¿Qué directiva de configuración del servidor Apache HTTPD define dónde se almacenan los archivos de registro (logs)? (Especifica SOLO la directiva)",
    "options": [],
    "answer": "ErrorLog",
    "explicacion": "La directiva ErrorLog establece el nombre del archivo donde el servidor registra cualquier error que encuentre.",
    "pista": "Directiva para o log de erros."
  },
  {
    "question": "34. ¿Qué afirmaciones sobre las directivas Alias y Redirect en Apache son ciertas? (Elige dos)",
    "options": [
      "A. Alias solo puede referenciar archivos bajo el DocumentRoot",
      "B. Redirect funciona con expresiones regulares",
      "C. Redirect se maneja en el lado del cliente",
      "D. Alias se maneja en el lado del servidor",
      "E. Alias no es una directiva de configuración válida"
    ],
    "answer": "C, D",
    "explicacion": "Alias mapea URLs a rutas locales del servidor de forma interna, mientras que Redirect envía un código de estado al cliente.",
    "pista": "Um é interno e outro é instrução para o navegador."
  },
  {
    "question": "35. ¿Qué directiva http_access para Squid permite a los usuarios en la ACL 'sales_net' acceder a Internet solo en los horarios especificados en la ACL 'sales_time'?",
    "options": [
      "A. http_access deny sales_time sales_net",
      "B. http_access allow sales_net sales_time",
      "C. http_access allow sales_net and sales_time",
      "D. allow http_access sales_net sales_time",
      "E. http_access sales_net sales_time"
    ],
    "answer": "B",
    "explicacion": "Squid requiere que ambas ACLs se listen en la misma línea para que se aplique un 'AND' lógico.",
    "pista": "Lista ambas as ACLs na mesma linha."
  },
  {
    "question": "36. ¿Qué opción en squid.conf establece el número de puerto que Squid usará para escuchar peticiones de clientes?",
    "options": [
      "A. port",
      "B. client_port",
      "C. http_port",
      "D. server_port",
      "E. squid_port"
    ],
    "answer": "C",
    "explicacion": "http_port es la directiva que define la dirección y puerto de escucha.",
    "pista": "Porta para HTTP."
  },
  {
    "question": "37. Al usar mod_authz_core, ¿cuáles de los siguientes argumentos pueden usarse con 'Require' para especificar el proveedor de autenticación? (Elige tres)",
    "options": [
      "A. method",
      "B. all",
      "C. regex",
      "D. header",
      "E. expr"
    ],
    "answer": "A, B, E",
    "explicacion": "Require permite usar 'all', 'method' y 'expr' (expresiones) entre otros proveedores.",
    "pista": "Métodos HTTP e expressões."
  },
  {
    "question": "38. ¿Qué herramienta crea una Solicitud de Firma de Certificado (CSR) para servir HTTPS con Apache?",
    "options": [
      "A. apachectl",
      "B. certgen",
      "C. cartool",
      "D. httpsgen",
      "E. openssl"
    ],
    "answer": "E",
    "explicacion": "openssl es la herramienta estándar para generar llaves y solicitudes de certificados (CSR).",
    "pista": "A ferramenta padrão para SSL/TLS."
  },
  {
    "question": "39. En respuesta a una solicitud de firma de certificado, una CA envió el certificado del servidor web junto con el certificado de una CA intermedia. ¿Qué se debe hacer con el certificado intermedio en Apache?",
    "options": [
      "A. Debe fusionarse con el certificado del servidor en un solo archivo especificado en SSLCertificateFile",
      "B. Debe usarse para verificar el certificado antes de desplegarlo y luego puede borrarse",
      "C. Debe almacenarse en su propio archivo referenciado en SSLCACertificateFile",
      "D. Debe importarse en el almacén de certificados del navegador usado para las pruebas",
      "E. Debe archivarse y reenviarse a la CA para solicitar la renovación"
    ],
    "answer": "A",
    "explicacion": "En versiones modernas de Apache, se recomienda incluir la cadena de certificados (chain) en el mismo archivo del certificado del host.",
    "pista": "Combinam-se num único ficheiro."
  },
  {
    "question": "40. ¿Qué directiva en un bloque de configuración de Nginx define los puertos TCP y protocolos que usará el host virtual? (Solo el nombre)",
    "options": [],
    "answer": "listen",
    "explicacion": "La directiva listen indica a Nginx en qué puerto y dirección debe aceptar conexiones.",
    "pista": "O Nginx 'escuta' em..."
  },
  {
    "question": "41. Al intentar configurar un proxy inverso a través de Nginx, ¿qué palabra clave falta en el siguiente ejemplo? \nlocation / { \n_______ http://proxiedserver:8080; \n}",
    "options": [
      "A. remote_proxy",
      "B. reverse_proxy",
      "C. proxy_reverse",
      "D. proxy_pass",
      "E. forward_to"
    ],
    "answer": "D",
    "explicacion": "proxy_pass es la directiva encargada de pasar la petición al servidor backend.",
    "pista": "Directiva para passar o proxy."
  },
  {
    "question": "42. Si no hay una directiva de acceso (access directive), ¿cuál es la configuración por defecto para OpenLDAP?",
    "options": [
      "A. access to * by * read",
      "B. access to * by anonymous none by * read",
      "C. access to * by anonymous auth by * read",
      "D. access to * by anonymous write by * read"
    ],
    "answer": "B",
    "explicacion": "Por defecto, OpenLDAP restringe el acceso anónimo y permite la lectura a usuarios autenticados.",
    "pista": "Anónimos não têm acesso por defeito."
  },
  {
    "question": "43. Un host llamado 'lpi' con MAC 08:00:26:4c:59:23 debe recibir siempre la IP 192.168.1.2 de un servidor ISC DHCPD. ¿Qué configuración lo logra?",
    "options": [
      "A. host lpi { hardware-ethernet 08:00:26:4c:59:23; fixed-address 192.168.1.2; }",
      "B. host lpi { mac=08:00:2b:4c:59:23; ip=192.168.1.2; }",
      "C. host lpi 08:00:26:4c:59:23 192.168.1.2",
      "D. host lpi { hardware ethernet 08:00:26:4c:59:23; fixed-address 192.168.1.2; }",
      "E. host lpi { hardware-address 08:00:26:4c:59:23; fixed-ip 192.168.1.2; }"
    ],
    "answer": "D",
    "explicacion": "La sintaxis correcta en dhcpd.conf utiliza 'hardware ethernet' (separado) y 'fixed-address'.",
    "pista": "Espaço entre 'hardware' e 'ethernet'."
  },
  {
    "question": "44. ¿Cómo se configura la cuenta del administrador de LDAP cuando las directivas rootdn y rootpw no están presentes en el archivo slapd.conf?",
    "options": [
      "A. Se usa la cuenta por defecto 'admin' con contraseña 'admin'",
      "B. La cuenta se define mediante una ACL en slapd.conf",
      "C. Se usa la cuenta por defecto 'admin' sin contraseña",
      "D. La cuenta se define en el archivo /etc/ldap.secret",
      "E. La cuenta se define en el archivo /etc/ldap.root.conf"
    ],
    "answer": "B",
    "explicacion": "Sin las directivas rootdn/rootpw, los privilegios administrativos deben otorgarse mediante ACLs.",
    "pista": "Controlado por ACLs."
  },
  {
    "question": "45. ¿Qué módulo PAM permite al administrador usar un archivo arbitrario con una lista de usuarios y grupos para aplicar restricciones sobre los recursos del sistema?",
    "options": [
      "A. pam_filter",
      "B. pam_limits",
      "C. pam_listfile",
      "D. pam_unix"
    ],
    "answer": "C",
    "explicacion": "pam_listfile permite usar un archivo arbitrario con listas de usuarios o grupos para permitir o denegar acceso y aplicar restricciones.",
    "pista": "Lista en fichero (users/grupos)."
  },
  {
    "question": "46. Según este extracto de LDIF, ¿a qué unidad organizativa (ou) pertenece Robert Smith? \ndn: cn=Robert Smith, ou=people, dc=example, dc=com",
    "options": [],
    "answer": "people",
    "explicacion": "El Distinguished Name (dn) muestra claramente que Robert Smith está dentro de 'ou=people'.",
    "pista": "Observa o campo 'ou'."
  },
  {
    "question": "47. En un archivo de configuración de PAM, ¿qué es cierto sobre el flag de control 'required'?",
    "options": [
      "A. Si el módulo tiene éxito, no se invocarán más módulos del mismo tipo",
      "B. El éxito es necesario, pero si falla se devuelve el control inmediatamente al usuario",
      "C. El éxito del módulo es necesario para el éxito final, pero se ejecutarán todos los demás módulos del mismo tipo",
      "D. El módulo no es crítico y su resultado no importa",
      "E. Si el módulo falla, no se invocarán más módulos del mismo tipo"
    ],
    "answer": "C",
    "explicacion": "Required obliga al éxito, pero oculta qué módulo falló ejecutando el resto de la pila.",
    "pista": "Obrigatório mas silencioso até ao fim."
  },
  {
    "question": "48. ¿Cuál es el nombre del elemento raíz del árbol LDAP que contiene la configuración de un servidor OpenLDAP que usa configuración basada en directorio (RTC)? (Solo el nombre)",
    "options": [],
    "answer": "cn=config",
    "explicacion": "En OpenLDAP con OLC (cn=config), la raíz del árbol de configuración es cn=config.",
    "pista": "Raíz OLC: cn=config."
  },
  {
    "question": "49. ¿Cómo se organizan y almacenan los módulos PAM?",
    "options": [
      "A. Como archivos de texto plano en /etc/security/",
      "B. Como binarios enlazados estáticamente en /etc/pam.d/bin/",
      "C. Como módulos del kernel dentro de /lib/modules/",
      "D. Como archivos de objeto compartido dentro de la jerarquía /lib/",
      "E. Como binarios enlazados dinámicamente en /usr/lib/pam/sbin/"
    ],
    "answer": "D",
    "explicacion": "Los módulos PAM son bibliotecas compartidas (.so) ubicadas en directorios de librerías del sistema (p. ej., /lib/security, /usr/lib/security).",
    "pista": "Bibliotecas .so en /lib*/security."
  },
  {
    "question": "50. ¿Qué sentencia en la configuración de ISC DHCPD se utiliza para especificar si un pool de direcciones puede ser usado por nodos que tienen una sección 'host' correspondiente?",
    "options": [
      "A. identified-nodes",
      "B. unconfigured-hosts",
      "C. missing-peers",
      "D. unmatched-hwaddr",
      "E. unknown-clients"
    ],
    "answer": "E",
    "explicacion": "unknown-clients permite distinguir entre clientes definidos en la configuración y aquellos que no.",
    "pista": "Clientes desconhecidos."
  },
  {
    "question": "51. Para especificar alteraciones en una entrada LDAP, ¿qué palabra clave falta en este extracto? \ndn: cn=Some Person, dc=example, dc=com \nchangetype: _______",
    "options": [],
    "answer": "add",
    "explicacion": "Para añadir nuevos atributos o entradas, el tipo de cambio es 'add'.",
    "pista": "Adicionar em inglês."
  },
  {
    "question": "52. ¿Qué comando de cliente OpenLDAP puede usarse para cambiar la contraseña de una entrada LDAP? (Solo el comando)",
    "options": [],
    "answer": "ldappasswd",
    "explicacion": "ldappasswd es la herramienta específica para cambiar contraseñas en el directorio.",
    "pista": "ldappasswd."
  },
  {
    "question": "53. Una empresa cambia de dominio DNS y quiere aceptar correos para ambos dominios en su servidor Postfix. ¿Qué opción debe actualizarse?",
    "options": [
      "A. mydomain",
      "B. mylocations",
      "C. mydestination",
      "D. myhosts",
      "E. mydomains"
    ],
    "answer": "C",
    "explicacion": "mydestination define la lista de dominios para los cuales el servidor se considera el destino final.",
    "pista": "Meu destino."
  },
  {
    "question": "54. ¿Cuál es la ruta al archivo de configuración global de Postfix? (Ruta completa)",
    "options": [],
    "answer": "/etc/postfix/main.cf",
    "explicacion": "main.cf es el archivo principal donde se configuran la mayoría de los parámetros de Postfix.",
    "pista": "Ficheiro principal."
  },
  {
    "question": "55. ¿Cuándo se aplican normalmente los filtros Sieve a un correo electrónico?",
    "options": [
      "A. Cuando el correo se entrega a un buzón",
      "B. Cuando el correo es retransmitido por un servidor SMTP",
      "C. Cuando el correo es recibido por un smarthost SMTP",
      "D. Cuando el correo se envía al primer servidor por un MUA",
      "E. Cuando el correo es recuperado por un MUA"
    ],
    "answer": "A",
    "explicacion": "Sieve es un lenguaje de filtrado que actúa durante la fase de entrega final.",
    "pista": "Na entrega à caixa de correio."
  },
  {
    "question": "56. Se descubre que el servidor de correo es un 'open relay'. ¿Qué acciones ayudan a prevenirlo manteniendo la recepción de correos de la empresa? (Elige dos)",
    "options": [
      "A. Restringir Postfix para que solo acepte correos para dominios alojados en este servidor",
      "B. Configurar Dovecot para soportar conectividad IMAP",
      "C. Configurar netfilter para no permitir tráfico del puerto 25 en la red pública",
      "D. Restringir Postfix para que solo retransmita SMTP saliente desde la red interna",
      "E. Actualizar el formato de buzón de mbox a maildir"
    ],
    "answer": "A, D",
    "explicacion": "Un servidor seguro solo debe aceptar correos para sus propios dominios y restringir el relay.",
    "pista": "Limita destinos e origem."
  },
  {
    "question": "57. Tras instalar Dovecot, se observa que los procesos en 'ps ax' aparecen como 'dovecot/imap'. ¿Qué opción debe activarse para ver el nombre de usuario e IP en el título del proceso?",
    "options": [
      "A. --with-linux-extprocnames al compilar",
      "B. sys.ps.allow_descriptions=1 en sysctl.conf",
      "C. proc.all.show_status=1 en sysctl.conf",
      "D. verbose_proctitle = yes en la configuración de Dovecot",
      "E. process_format = \"%u %I %s\" en la configuración de Dovecot"
    ],
    "answer": "D",
    "explicacion": "verbose_proctitle permite que Dovecot actualice el nombre del proceso con información detallada.",
    "pista": "Título detalhado."
  },
  {
    "question": "58. ¿Qué comando de Postfix se usa para reconstruir todas las bases de datos de alias con una sola invocación y sin parámetros adicionales?",
    "options": [
      "A. makealiases",
      "B. newaliases",
      "C. postalias",
      "D. postmapbuild"
    ],
    "answer": "B",
    "explicacion": "newaliases lee el archivo /etc/aliases y actualiza la base de datos indexada.",
    "pista": "Novos aliases."
  },
  {
    "question": "59. ¿Qué acción en un filtro Sieve reenvía un mensaje a otra dirección de correo sin cambiar el mensaje original? (Solo el nombre)",
    "options": [],
    "answer": "redirect",
    "explicacion": "La acción 'redirect' envía el mensaje tal cual a un nuevo destinatario.",
    "pista": "Redireccionar em inglês."
  },
  {
    "question": "60. ¿Qué mecanismos de autenticación son soportados por Dovecot? (Elige tres)",
    "options": [
      "A. ldap",
      "B. digest-md5",
      "C. cram-md5",
      "D. plain",
      "E. krb5"
    ],
    "answer": "B, C, D",
    "explicacion": "Dovecot soporta varios mecanismos de autenticación SASL como PLAIN, CRAM-MD5 y DIGEST-MD5.",
    "pista": "Métodos clássicos."
  },
  {
    "question": "61. ¿Cuál de los siguientes servicios pertenece a NFSv4 y no existe en NFSv3?",
    "options": [
      "A. rpc.idmapd",
      "B. rpc.statd",
      "C. nfsd",
      "D. rpc.mountd"
    ],
    "answer": "A",
    "explicacion": "rpc.idmapd es el demonio encargado del mapeo de nombres de usuario y grupos en NFSv4.",
    "pista": "Mapeamento de IDs."
  },
  {
    "question": "62. ¿Qué acción sincroniza las contraseñas de UNIX con las de Samba cuando la contraseña cifrada de Samba se cambia usando smbpasswd?",
    "options": [
      "A. No hay acciones para lograr esto ya que no es posible",
      "B. Ejecutar netvamp regularmente para convertir las contraseñas",
      "C. Ejecutar winbind sync para sincronizar las contraseñas",
      "D. Añadir 'unix password sync = yes' al archivo smb.conf",
      "E. Añadir 'smb unix password' al archivo smb.conf"
    ],
    "answer": "D",
    "explicacion": "La directiva 'unix password sync' permite que Samba actualice la contraseña del sistema local.",
    "pista": "Sincronização Unix."
  },
  {
    "question": "63. Para unir un servidor de archivos al dominio de Active Directory 'intra.example.com', el comando 'net ads join' devuelve un error. ¿Qué debe hacerse según la configuración de smb.conf proporcionada?",
    "options": [
      "A. Cambiar el rol del servidor a 'ad member server'",
      "B. Añadir el realm 'intra.example.com' y cambiar el workgroup al nombre NetBIOS del dominio",
      "C. Crear manualmente una cuenta de máquina en AD y especificar el nombre con -u",
      "D. Eliminar winbind enum ya que es incompatible con AD",
      "E. Eliminar todas las estrofas de configuración de idmap ya que se definen globalmente en AD"
    ],
    "answer": "E",
    "explicacion": "En ciertos escenarios, la configuración manual de idmap puede entrar en conflicto con la gestión global.",
    "pista": "Remove idmap."
  },
  {
    "question": "64. Al montar un cliente NFSv4, el punto de montaje /mnt muestra el contenido de /usr en lugar de la raíz. ¿Qué opción en /etc/exports debe cambiarse o eliminarse para que aparezca la raíz de NFSv4? (Solo el nombre)",
    "options": [],
    "answer": "fsid=0",
    "explicacion": "En NFSv4, la exportación que actúa como pseudo-raíz debe marcarse con fsid=0; si no, el cliente puede ver un subárbol (p. ej. /usr) como raíz.",
    "pista": "Pseudo-root: fsid=0."
  },
  {
    "question": "65. ¿Qué confirma el comando 'samba-tool testparm' respecto a la configuración de Samba?",
    "options": [
      "A. La configuración se carga correctamente",
      "B. El servicio funciona según lo esperado",
      "C. Los servicios de Samba se inician automáticamente al arrancar",
      "D. El firewall no bloquea el acceso a los servicios",
      "E. Todos los procesos usan la versión de configuración más reciente"
    ],
    "answer": "A",
    "explicacion": "testparm verifica la sintaxis y la validez del archivo smb.conf.",
    "pista": "Teste de parâmetros."
  },
  {
    "question": "66. ¿Qué opción de Samba debe usarse para configurar un servicio de impresora para invitados (guest)?",
    "options": [
      "A. security = cups",
      "B. security = ldap",
      "C. security = pam",
      "D. security = share",
      "E. security = printing"
    ],
    "answer": "D",
    "explicacion": "'security = share' fue un modo histórico para acceso por recurso, pero está obsoleto en Samba moderno; hoy se usa 'guest ok = yes' (y normalmente 'map to guest = Bad User') en el recurso de impresión.",
    "pista": "Guest ok / map to guest."
  },
  {
    "question": "67. ¿Qué declaración de 'host allow' permitirá a las estaciones cableadas (192.168.1.0/24) conectar al servidor Samba sin denegar el acceso a nadie más?",
    "options": [
      "A. host allow 192.168.1.1-255",
      "B. host allow 192.168.1.100 192.168.2.200 localhost",
      "C. host deny 192.168.1.100/255.255.255.0",
      "D. host allow 192.168.1.0/255.255.255.0 192.168.2.0/255.255.255.0",
      "E. host allow localhost"
    ],
    "answer": "D",
    "explicacion": "Para permitir esas subredes, se listan en 'hosts allow'. Añadir localhost no es necesario para cumplir el requisito y, en este caso, la opción E no añade la red 192.168.1.0/24.",
    "pista": "Permite subredes; E no sirve."
  },
  {
    "question": "68. ¿Qué comando muestra las estadísticas del kernel para NFS? (Solo el comando)",
    "options": [],
    "answer": "nfsstat",
    "explicacion": "nfsstat muestra información estadística sobre la actividad del cliente y servidor NFS.",
    "pista": "nfsstat."
  },
  {
    "question": "69. ¿Qué palabra clave se usa en la configuración de Squid para definir redes y horarios con el fin de limitar el acceso?",
    "options": [
      "A. acl",
      "B. allow",
      "C. http_allow",
      "D. permit"
    ],
    "answer": "A",
    "explicacion": "Las ACL (Access Control Lists) son la base de la configuración de Squid.",
    "pista": "Lista de Controlo de Acesso."
  },
  {
    "question": "70. En la configuración de Apache para www y www2, las solicitudes no se manejan correctamente. ¿Qué debe cambiarse?",
    "options": [
      "A. Dividir la configuración en dos secciones VirtualHost",
      "B. Añadir el puerto al ServerName",
      "C. Colocar ambos nombres separados por comas en una declaración ServerName",
      "D. Mencionar ambos nombres en la etiqueta de apertura VirtualHost",
      "E. Usar una declaración ServerName y las adicionales en ServerAlias"
    ],
    "answer": "E",
    "explicacion": "Apache solo admite un nombre en ServerName; los nombres adicionales deben ir en ServerAlias para que el vhost responda a ambos.",
    "pista": "ServerName + ServerAlias."
  },
  {
    "question": "71. Dado 'cache_dir ufs /var/spool/squid3/ 1024 16 256', ¿qué directorios existirán directamente dentro de /var/spool/squid3/? (Elige dos)",
    "options": [
      "A. 0F",
      "B. A0",
      "C. 0b",
      "D. FF",
      "E. 00"
    ],
    "answer": "A, E",
    "explicacion": "Squid crea una estructura hexadecimal (de 00 a 0F para 16 directorios).",
    "pista": "Estrutura hexadecimal."
  },
  {
    "question": "72. ¿Qué afirmaciones son ciertas respecto a Server Name Indication (SNI)? (Elige dos)",
    "options": [
      "A. Soporta failover transparente de sesiones TLS",
      "B. Permite que múltiples hosts virtuales HTTP con SSL/TLS coexistan en la misma IP",
      "C. Permite a los servidores HTTP actualizar el DNS de sus hosts virtuales",
      "D. Proporciona una lista de hosts virtuales disponibles al cliente",
      "E. Envía el nombre de host de la URL solicitada durante el handshake TLS"
    ],
    "answer": "B, E",
    "explicacion": "SNI permite al cliente indicar el nombre del servidor al inicio del protocolo TLS.",
    "pista": "Múltiplos certificados e nome de host."
  },
  {
    "question": "73. ¿Qué directiva de Apache especifica la clave privada RSA usada para generar el certificado SSL?",
    "options": [
      "A. SSLCertificateKeyFile",
      "B. SSLKeyFile",
      "C. SSLPrivateKeyFile",
      "D. SSLRSAKeyFile"
    ],
    "answer": "A",
    "explicacion": "SSLCertificateKeyFile apunta al archivo de la clave privada.",
    "pista": "Chave do certificado SSL."
  },
  {
    "question": "74. ¿Qué comando se usa para CAMBIAR la contraseña de usuarios existentes en Apache sin perder datos?",
    "options": [
      "A. htpasswd -c /srv/www/security/sitepasswd user",
      "B. htpasswd /srv/www/security/sitepasswd user",
      "C. htpasswd -n /srv/www/security/sitepasswd user",
      "D. htpasswd -D /srv/www/security/sitepasswd user"
    ],
    "answer": "B",
    "explicacion": "Si el archivo ya existe, ejecutar htpasswd sin '-c' permite actualizar.",
    "pista": "Sem -c."
  },
  {
    "question": "75. ¿Qué directiva de Apache se usa para especificar el método de autenticación (ej. None o Basic)?",
    "options": [
      "A. AuthUser",
      "B. AllowedAuthUser",
      "C. AuthType",
      "D. AllowAuth"
    ],
    "answer": "C",
    "explicacion": "AuthType define el esquema de autenticación a utilizar.",
    "pista": "Tipo de autenticação."
  },
  {
    "question": "76. ¿Cuáles de las siguientes son directivas de registro (logging) en Apache? (Elige dos)",
    "options": [
      "A. TransferLog",
      "B. CustomLog",
      "C. ErrorLog",
      "D. ServerLog",
      "E. VHostLog"
    ],
    "answer": "A, B",
    "explicacion": "CustomLog y TransferLog se utilizan para definir el registro de acceso.",
    "pista": "Transferência e logs personalizados."
  },
  {
    "question": "77. ¿Qué opción en la configuración de Nginx define la ruta del sistema de archivos donde se encuentra el contenido?",
    "options": [
      "A. location",
      "B. htdocs",
      "C. DocumentRoot",
      "D. root",
      "E. base_dir"
    ],
    "answer": "D",
    "explicacion": "Nginx utiliza la directiva 'root' para definir el directorio base.",
    "pista": "Directório raiz."
  },
  {
    "question": "78. ¿Qué directiva se usa en Nginx para pasar peticiones a una aplicación FastCGI?",
    "options": [
      "A. fastcgi_pass",
      "B. fastcgi_proxy",
      "C. proxy_fastcgi",
      "D. proxy_fastcgi_pass",
      "E. fastcgi_forward"
    ],
    "answer": "A",
    "explicacion": "fastcgi_pass conecta Nginx con un servidor FastCGI.",
    "pista": "Passagem a FastCGI."
  },
  {
    "question": "79. ¿Qué información debe enviarse a una autoridad de certificación para solicitar un certificado de servidor web?",
    "options": [
      "A. La clave privada del servidor",
      "B. La dirección IP del servidor",
      "C. La lista de cifrados soportados",
      "D. El archivo de configuración SSL del servidor",
      "E. La solicitud de firma de certificado (CSR)"
    ],
    "answer": "E",
    "explicacion": "El CSR contiene la clave pública y la información de identidad necesaria.",
    "pista": "CSR."
  },
  {
    "question": "80. ¿Para qué utiliza nmap el 'fingerprinting' de la pila TCP/IP?",
    "options": [
      "A. Para determinar el sistema operativo remoto",
      "B. Para filtrar respuestas de servidores específicos",
      "C. Para identificar respuestas duplicadas",
      "D. Para enmascarar las respuestas de los servidores",
      "E. Para identificar servidores para análisis forense"
    ],
    "answer": "A",
    "explicacion": "Nmap analiza las sutiles diferencias de respuesta para identificar el SO.",
    "pista": "Identificação de SO."
  },
  {
    "question": "81. Para permitir el reenvío de conexiones X11 a través de un servidor SSH, ¿qué palabra clave debe estar en 'yes' en sshd_config?",
    "options": [
      "A. AllowForwarding",
      "B. ForwardingAllow",
      "C. X11ForwardingAllow",
      "D. X11Forwarding"
    ],
    "answer": "D",
    "explicacion": "X11Forwarding habilita la tunelización de aplicaciones gráficas.",
    "pista": "Reenvio X11."
  },
  {
    "question": "82. ¿Cuál es el puerto estándar utilizado por OpenVPN?",
    "options": [
      "A. 1723",
      "B. 4500",
      "C. 500",
      "D. 1194"
    ],
    "answer": "D",
    "explicacion": "El puerto 1194 UDP es el oficial para OpenVPN.",
    "pista": "1194."
  },
  {
    "question": "83. ¿Qué opción en el archivo sshd_config instruye al demonio a permitir solo nombres de usuario específicos? (Solo el nombre)",
    "options": [],
    "answer": "AllowUsers",
    "explicacion": "La directiva AllowUsers crea una lista blanca de usuarios permitidos.",
    "pista": "Permitir utilizadores."
  },
  {
    "question": "84. Usando su configuración estándar, ¿cómo bloquea fail2ban a los clientes SSH ofensivos?",
    "options": [
      "A. Actuando como un proxy frente a SSHD",
      "B. Modificando y ajustando la configuración de SSHD",
      "C. Creando y manteniendo reglas de netfilter",
      "D. Creando rutas nulas que descartan paquetes",
      "E. Modificando la configuración de TCP Wrapper"
    ],
    "answer": "C",
    "explicacion": "fail2ban interactúa dinámicamente con iptables o nftables.",
    "pista": "Usa o firewall do kernel."
  },
  {
    "question": "85. ¿Qué nombres FTP se reconocen como usuarios anónimos en vsftpd si 'anonymous_enable=yes'?",
    "options": [
      "A. anonymous",
      "B. ftp",
      "C. Cualquier nombre de usuario no existente",
      "D. nobody",
      "E. guest"
    ],
    "answer": "A, B",
    "explicacion": "Tanto el nombre 'anonymous' como su alias 'ftp' son aceptados.",
    "pista": "Anónimo e nome do protocolo."
  },
  {
    "question": "86. ¿Qué comandos pueden usarse para conectar e interactuar con servicios de red TCP remotos? (Elige dos)",
    "options": [
      "A. nettalk",
      "B. nc",
      "C. telnet",
      "D. cat",
      "E. netmap"
    ],
    "answer": "B, C",
    "explicacion": "netcat (nc) y telnet son herramientas versátiles para probar conectividad.",
    "pista": "nc e telnet."
  },
  {
    "question": "87. ¿A qué destino aparecerá una ruta tras activar IPv6 en una interfaz, incluso sin asignar direcciones globales?",
    "options": [
      "A. fe80::/10",
      "B. 0::/128",
      "C. 0::/0",
      "D. fe80::/64",
      "E. 2000::/3"
    ],
    "answer": "D",
    "explicacion": "Al activar IPv6, cada interfaz obtiene una dirección link-local (fe80::/64) y aparece la ruta correspondiente aunque no haya direcciones globales.",
    "pista": "Ruta link-local fe80::/64."
  },
  {
    "question": "88. Para evitar que usuarios anónimos listen archivos subidos, ¿qué permiso debe quitarse al directorio?",
    "options": [
      "A. Ejecución",
      "B. Lectura",
      "C. Lectura y ejecución",
      "D. Escritura",
      "E. No debe contener otros directorios"
    ],
    "answer": "B",
    "explicacion": "Quitar el permiso de lectura (r) impide listar el contenido.",
    "pista": "Retirar leitura."
  },
  {
    "question": "89. ¿Qué comando se usa para administrar las reglas de netfilter para IPv6?",
    "options": [
      "A. iptables",
      "B. iptablesv6",
      "C. iptables6",
      "D. ip6tables",
      "E. ipv6tables"
    ],
    "answer": "D",
    "explicacion": "ip6tables es el homólogo de iptables diseñado para IPv6.",
    "pista": "ip6tables."
  },
  {
    "question": "90. ¿Qué tabla de netfilter contiene las cadenas integradas INPUT, OUTPUT y FORWARD?",
    "options": [
      "A. ipconn",
      "B. filter",
      "C. nat",
      "D. default",
      "E. masq"
    ],
    "answer": "B",
    "explicacion": "La tabla 'filter' es la tabla por defecto para el filtrado.",
    "pista": "Filtro."
  },
  {
    "question": "91. Tras ejecutar ssh-keygen y aceptar los valores por defecto, ¿qué archivos se crean o modifican? (Elige dos)",
    "options": [
      "A. ~/.ssh/id_rsa.key",
      "B. ~/.ssh/id_rsa.pub",
      "C. ~/.ssh/id_rsa.prv",
      "D. ~/.ssh/id_rsa.crt",
      "E. ~/.ssh/id_rsa"
    ],
    "answer": "B, E",
    "explicacion": "Por defecto, se crea la clave privada y la pública.",
    "pista": "Privada e .pub."
  },
  {
    "question": "92. ¿Qué opción de configuración de OpenVPN hace que el servidor reenvíe paquetes entre clientes VPN por sí mismo?",
    "options": [
      "A. inter-client-traffic",
      "B. client-to-client",
      "C. client-router",
      "D. client-pass",
      "E. grant-client-traffic"
    ],
    "answer": "B",
    "explicacion": "La directiva 'client-to-client' permite que los clientes se vean internamente.",
    "pista": "De cliente para cliente."
  },
  {
    "question": "93. ¿Cuál de estas herramientas proporciona información DNS en el formato legible?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "C",
    "explicacion": "El comando 'host' produce una salida simplificada.",
    "pista": "host."
  },
  {
    "question": "94. ¿Qué subcomando de 'rndc' puede usarse para que BIND vuelva a leer solo ese archivo de zona?",
    "options": [
      "A. lookup",
      "B. reload",
      "C. fileupdate",
      "D. reread",
      "E. zoneupdate"
    ],
    "answer": "B",
    "explicacion": "Ejecutar 'rndc reload [nombre_zona]' recarga únicamente esa zona.",
    "pista": "Recarregar."
  },
  {
    "question": "95. Un archivo de zona contiene: '$ORIGIN example.com' y una línea para 'host2.example.org.'. ¿Qué problema presenta?",
    "options": [
      "A. La sentencia zone debe contener 'cross-zone-data yes'",
      "B. La zona no puede contener registros fuera de su jerarquía",
      "C. La declaración $ORIGIN no puede usarse en archivos incluidos para un nombre de zona específico",
      "D. Un registro A no puede contener una IPv4",
      "E. Los nombres no pueden ser FQDN"
    ],
    "answer": "B",
    "explicacion": "Un archivo de zona no debe contener registros fuera de la jerarquía del propio dominio de la zona; 'host2.example.org.' quedaría fuera si la zona es otra.",
    "pista": "Registro fuera de la zona."
  },
  {
    "question": "96. ¿Cuál de los siguientes tipos de registro DNS se utiliza para consultas DNS inversas?",
    "options": [
      "A. CNAME",
      "B. IN",
      "C. PTR",
      "D. REV",
      "E. RIN"
    ],
    "answer": "C",
    "explicacion": "El registro PTR apunta una dirección IP a un nombre.",
    "pista": "Ponteiro."
  },
  {
    "question": "97. Según el SOA extracto, ¿cuál es el email del administrador?",
    "options": [],
    "answer": "pluto@example.com",
    "explicacion": "En el SOA, el segundo campo es el email, sustituyendo el primer punto por @.",
    "pista": "Segundo campo do SOA."
  },
  {
    "question": "98. ¿Cuál es el propósito de DANE?",
    "options": [
      "A. Verificar la integridad de la info DNS",
      "B. Permitir actualizaciones dinámicas seguras",
      "C. Invalidar caché para acelerar actualizaciones",
      "D. Descubrir servidores para un servicio específico",
      "E. Verificar la asociación de certificados X.509 a nombres de host DNS"
    ],
    "answer": "E",
    "explicacion": "DANE utiliza DNSSEC para vincular certificados TLS a nombres de host.",
    "pista": "Vincular certificados a hosts."
  },
  {
    "question": "99. ¿Qué parámetros deben añadirse a BIND para usar TSIG?",
    "options": [
      "A. key.server.example.com { algorithm hmac-md5; secret ...; }",
      "B. TSIG server.example.com { algorithm hmac-md5; secret ...; }",
      "C. key \"server.example.com\" { algorithm hmac-md5; secret \"...\"; }",
      "D. key.server.example.com { algorithm hmac-md5; secret=...; }"
    ],
    "answer": "C",
    "explicacion": "La sintaxis correcta requiere 'key' y comillas.",
    "pista": "Palavra chave 'key'."
  },
  {
    "question": "100. ¿Qué opción en named.conf especifica qué hosts tienen permiso para consultar?",
    "options": [
      "A. allowed-hosts",
      "B. accept-query",
      "C. permit-query",
      "D. allow-query",
      "E. query-group"
    ],
    "answer": "D",
    "explicacion": "'allow-query' define una ACL o lista de IPs.",
    "pista": "Permitir consulta."
  },
  {
    "question": "101. ¿Qué subcomando de 'doveadm' muestra una lista de conexiones actuales? (Solo el subcomando)",
    "options": [],
    "answer": "who",
    "explicacion": "El comando 'doveadm who' lista los usuarios conectados.",
    "pista": "Quem?"
  },
  {
    "question": "102. ¿Qué acciones están disponibles en los filtros de núcleo (core) de Sieve? (Elige tres)",
    "options": [
      "A. drop",
      "B. discard",
      "C. fileinto",
      "D. relay",
      "E. keep"
    ],
    "answer": "B, C, E",
    "explicacion": "Las acciones básicas incluyen discard, fileinto y keep.",
    "pista": "Descartar, arquivar e manter."
  },
  {
    "question": "103. ¿Qué sentencias permiten combinaciones lógicas de condiciones en filtros Sieve? (Elige dos)",
    "options": [
      "A. allof",
      "B. anyof",
      "C. noneof",
      "D. and",
      "E. or"
    ],
    "answer": "A, B",
    "explicacion": "Sieve utiliza 'allof' (AND) y 'anyof' (OR).",
    "pista": "Todos ou qualquer."
  },
  {
    "question": "104. ¿Qué parámetro de Postfix modifica solo la dirección del remitente (sender)?",
    "options": [
      "A. alias_maps",
      "B. alias_rewrite_maps",
      "C. sender_canonical_maps",
      "D. sender_rewrite_maps"
    ],
    "answer": "C",
    "explicacion": "sender_canonical_maps permite reescribir la dirección 'From'.",
    "pista": "Mapas canónicos de remetente."
  },
  {
    "question": "105. ¿Qué opción en Postfix hace que los correos externos se pasen a otro servidor SMTP? (Solo el nombre)",
    "options": [],
    "answer": "relayhost",
    "explicacion": "relayhost define el servidor de retransmisión.",
    "pista": "Relay."
  },
  {
    "question": "106. ¿Cómo se llama la variable de Dovecot que especifica la ubicación del correo?",
    "options": [
      "A. mbox",
      "B. mail_location",
      "C. user_dir",
      "D. maildir",
      "E. user_mail_dir"
    ],
    "answer": "B",
    "explicacion": "mail_location define el formato y la ruta.",
    "pista": "Localização."
  },
  {
    "question": "107. En main.cf de Postfix, ¿cómo se continúan las definiciones en la siguiente línea?",
    "options": [
      "A. No es posible",
      "B. La línea inicial debe terminar en backslash (\\)",
      "C. La siguiente línea debe empezar con el signo más (+)",
      "D. La siguiente línea debe tener sangría (espacios en blanco)",
      "E. Se continúa hasta que se especifiquen todos los campos"
    ],
    "answer": "D",
    "explicacion": "Cualquier línea que empiece con espacios se considera continuación.",
    "pista": "Espaços em branco."
  },
  {
    "question": "108. ¿Qué comando de Postfix muestra un resumen del contenido de la cola?",
    "options": [
      "A. mailtraf",
      "B. queuequery",
      "C. qshape",
      "D. postmap",
      "E. poststats"
    ],
    "answer": "C",
    "explicacion": "qshape analiza las colas de Postfix.",
    "pista": "Forma da fila."
  },
  {
    "question": "109. ¿Qué entradas devuelve el filtro ldapsearch con OR e NOT?",
    "options": [
      "A. Entradas que no se llamen marie o con número que no empiece por 9",
      "B. Entradas que se llamen marie o con número que no empiece por 9",
      "C. Entradas que se llamen marie y con número que termine en 9",
      "D. Entradas que no se llamen marie y no empiecen por 9"
    ],
    "answer": "B",
    "explicacion": "El filtro usa OR entre 'marie' y el NOT de números que empiezan por 9.",
    "pista": "OR con NOT."
  },
  {
    "question": "110. ¿Qué tipos de asignación de direcciones IPv6 soporta DHCPv6? (Elige tres)",
    "options": [
      "A. Asignaciones normales renovables",
      "B. Asignaciones temporales no renovables",
      "C. Asignaciones de direcciones en lista negra",
      "D. Asignaciones de prefijos para enrutamiento",
      "E. Asignaciones anónimas no registradas"
    ],
    "answer": "A, B, D",
    "explicacion": "Soporta IANA, IATA y Delegación de Prefijos.",
    "pista": "Normal, temporal e prefixo."
  },
  {
    "question": "111. ¿Qué atributo define qué otros atributos se pueden establecer? (Solo el nombre)",
    "options": [],
    "answer": "objectClass",
    "explicacion": "objectClass define el esquema y los atributos permitidos.",
    "pista": "Classe de objecto."
  },
  {
    "question": "112. ¿Cuál de los siguientes comandos se utiliza para cambiar contraseñas de usuario en un directorio OpenLDAP?",
    "options": [
      "A. setent",
      "B. ldpasswd",
      "C. olppasswd",
      "D. ldappasswd",
      "E. ldapchpw"
    ],
    "answer": "D",
    "explicacion": "ldappasswd es la herramienta específica.",
    "pista": "ldappasswd."
  },
  {
    "question": "113. Según el dn extracto, ¿qué es 'dn'?",
    "options": [
      "A. El nombre de dominio",
      "B. El nombre del operador",
      "C. El nombre común",
      "D. El nombre distinguido",
      "E. El contenedor de delegación"
    ],
    "answer": "D",
    "explicacion": "DN (Distinguished Name) es la ruta única.",
    "pista": "Distinguished Name."
  },
  {
    "question": "114. ¿Qué afirmación es INCORRECTA respecto al formato de archivo LDIF?",
    "options": [
      "A. Indica dónde añadir atributos mediante una línea 'dn'",
      "B. Una línea en blanco separa una entrada de otra",
      "C. Los datos binarios requieren configuraciones específicas",
      "D. El archivo LDIF acepta cualquier tipo de codificación"
    ],
    "answer": "D",
    "explicacion": "LDIF debe seguir codificaciones específicas, no acepta 'cualquiera'.",
    "pista": "Não aceita qualquer codificação."
  },
  {
    "question": "115. ¿Qué opción en DHCPD define los servidores DNS?",
    "options": [
      "A. domain-name-servers",
      "B. domain-server",
      "C. name-server",
      "D. servers"
    ],
    "answer": "A",
    "explicacion": "La opción 'option domain-name-servers' lista las IPs.",
    "pista": "Servidores de nomes."
  },
  {
    "question": "116. ¿Qué módulo PAM gestiona las variables de entorno?",
    "options": [
      "A. pam_set",
      "B. pam_shell",
      "C. pam-vars",
      "D. pam-env",
      "E. pam_export"
    ],
    "answer": "D",
    "explicacion": "pam_env lee archivos para establecer el entorno.",
    "pista": "Environment."
  },
  {
    "question": "117. ¿Qué línea es válida en un archivo de /etc/pam.d/?",
    "options": [
      "A. auth required pam_unix.so try_first_pass nullok",
      "B. auth try_first_pass nullok, require pam_unix.so",
      "C. auth required:pam_unix.so(try_first_pass nullok)",
      "D. auth pam_unix.so (required try_first_pass nullok)"
    ],
    "answer": "A",
    "explicacion": "La sintaxis es: tipo | control | módulo | argumentos.",
    "pista": "auth required módulo."
  },
  {
    "question": "118. ¿Cómo desactivar el login para todos los usuarios excepto root?",
    "options": [
      "A. Usar pam_block con /etc/login",
      "B. Usar pam_deny con /etc/deny",
      "C. Usar pam_pwdb con /etc/pwdv.conf",
      "D. Usar pam_nologin con /etc/nologin"
    ],
    "answer": "D",
    "explicacion": "Si existe /etc/nologin, pam_nologin impide el acceso.",
    "pista": "Nologin."
  },
  {
    "question": "119. ¿Qué valores pueden usarse en 'olcBackend'? (Elige tres)",
    "options": [
      "A. xml",
      "B. bdb",
      "C. passwd",
      "D. ldap",
      "E. text"
    ],
    "answer": "B, D, E",
    "explicacion": "Los backends comunes incluyen bdb, ldap y text.",
    "pista": "bdb, ldap, text."
  }
];