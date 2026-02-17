var preguntasLPIC2_2 = [
  {
    "question": "1. En un router Linux, se ha habilitado el reenvío de paquetes para IPv4. Tras un reinicio, la máquina ya no reenvía paquetes IP de otros hosts. El comando 'echo 1 > /proc/sys/net/ipv4/ip_forward' resuelve este problema temporalmente. ¿Cuál de las siguientes opciones es la mejor manera de asegurar que este ajuste se mantenga tras los reinicios del sistema?",
    "options": [
      "A. Añadir el comando al script de inicio del usuario root.",
      "B. Añadir el comando a cualquier script de inicio de sesión de usuario.",
      "C. En /etc/sysctl.conf, cambiar net.ipv4.ip_forward a 1.",
      "D. En /etc/rc.local, añadir net.ipv4.ip_forward = 1.",
      "E. En /etc/sysconfig/iptables-config, añadir ipv4.ip_forward = 1."
    ],
    "answer": "C",
    "explicacion": "El archivo /etc/sysctl.conf permite configurar parámetros del kernel de forma persistente.",
    "pista": "sysctl gestiona parámetros del núcleo."
  },
  {
    "question": "2. ¿Qué información se puede encontrar en el archivo especificado por el parámetro 'status' en un archivo de configuración de servidor OpenVPN? (Elige dos)",
    "options": [
      "A. Errores y advertencias generados por el demonio openvpn.",
      "B. Información de enrutamiento.",
      "C. Información estadística sobre el demonio openvpn en ejecución.",
      "D. Una lista de clientes actualmente conectados.",
      "E. Un historial de todos los clientes que se han conectado en algún momento."
    ],
    "answer": "B, D",
    "explicacion": "El archivo de estado rastrea las rutas activas y los clientes conectados en tiempo real.",
    "pista": "Tráfico y usuarios en tiempo real."
  },
  {
    "question": "3. ¿Cuál de las siguientes líneas en el archivo de configuración sshd debería, si está presente, cambiarse para aumentar la seguridad del servidor? (Elige dos)",
    "options": [
      "A. Protocol 2, 1",
      "B. PermitEmptyPasswords no",
      "C. Port 22",
      "D. PermitRootLogin yes",
      "E. IgnoreRhosts yes"
    ],
    "answer": "A, D",
    "explicacion": "El protocolo SSH 1 es inseguro y permitir el acceso de root directamente es un riesgo de seguridad.",
    "pista": "Protocolos obsoletos y acceso de root."
  },
  {
    "question": "4. ¿Cuál de los siguientes parámetros de nmap escanea un objetivo en busca de puertos TCP abiertos? (Elige dos)",
    "options": [
      "A. -sO",
      "B. -sz",
      "C. -sT",
      "D. -sU",
      "E. -sS"
    ],
    "answer": "C, E",
    "explicacion": "-sT realiza un escaneo de conexión TCP y -sS un escaneo TCP SYN.",
    "pista": "Métodos estándar de escaneo TCP."
  },
  {
    "question": "5. ¿Cuáles de las siguientes afirmaciones son correctas con respecto a los comandos ejecutados en un router Linux: 'ip6tables -A FORWARD -s fe80::/64 -j DROP' e 'ip6tables -A FORWARD -d fe80::/64 -j DROP'? (Elige dos)",
    "options": [
      "A. Los paquetes con direcciones fe80::/64 nunca ocurren en la cadena FORWARD.",
      "B. Las reglas deshabilitan el reenvío porque los nodos usan fe80::/64 para identificar routers.",
      "C. ip6tables devuelve un error en el segundo comando.",
      "D. Ambos comandos ip6tables se completan sin mensajes de error ni advertencias.",
      "E. Las reglas suprimen la configuración automática mediante anuncios de router o DHCPv6."
    ],
    "answer": "D, E",
    "explicacion": "Las direcciones link-local son esenciales para el descubrimiento de vecinos e IPv6.",
    "pista": "Protocolo NDP."
  },
  {
    "question": "6. ¿Qué opción en el archivo de configuración del cliente le diría a OpenVPN que use un puerto de origen dinámico al realizar una conexión con un par?",
    "options": [
      "A. src-port",
      "B. remote",
      "C. source-port",
      "D. nobind",
      "E. dynamic-bind"
    ],
    "answer": "D",
    "explicacion": "La opción 'nobind' asegura que el cliente no se vincule a un puerto local específico.",
    "pista": "No vincular a puerto fijo."
  },
  {
    "question": "7. ¿Qué usuario de Linux es utilizado por vsftpd para realizar operaciones de sistema de archivos para usuarios FTP anónimos?",
    "options": [
      "A. El usuario de Linux que ejecuta el proceso vsftpd.",
      "B. El usuario que posee el directorio raíz de FTP.",
      "C. El nombre de usuario utilizado para el inicio de sesión anónimo.",
      "D. El usuario root.",
      "E. El usuario especificado en la opción ftp_username."
    ],
    "answer": "E",
    "explicacion": "ftp_username define el usuario sin privilegios para sesiones anónimas.",
    "pista": "Parámetro de vsftpd."
  },
  {
    "question": "8. ¿Cuál de las siguientes configuraciones de sshd debe establecerse en 'no' para deshabilitar completamente los inicios de sesión basados en contraseña? (Elige dos)",
    "options": [
      "A. PAMAuthentication",
      "B. ChallengeResponseAuthentication",
      "C. PermitPlaintextLogin",
      "D. UsePasswords",
      "E. PasswordAuthentication"
    ],
    "answer": "B, E",
    "explicacion": "Deshabilitar Password y ChallengeResponse obliga al uso de llaves.",
    "pista": "Contraseñas e interactividad."
  },
  {
    "question": "9. Cuando la política predeterminada para la cadena INPUT de netfilter es DROP, ¿por qué debería existir una regla que permita el tráfico a localhost?",
    "options": [
      "A. Todo el tráfico a localhost debe permitirse siempre.",
      "B. No importa; netfilter nunca afecta a localhost.",
      "C. Algunas aplicaciones usan localhost para comunicarse con otras.",
      "D. syslogd recibe mensajes en localhost.",
      "E. iptables se comunica con netfilterd en localhost."
    ],
    "answer": "C",
    "explicacion": "Muchos servicios dependen de la interfaz de bucle invertido para la comunicación interna.",
    "pista": "Comunicación interna."
  },
  {
    "question": "10. ¿Qué comando crea un par de llaves SSH? (Especifica SOLO el comando)",
    "answer": "ssh-keygen",
    "explicacion": "ssh-keygen es la herramienta estándar para generar llaves RSA o ED25519.",
    "pista": "Generador de llaves SSH."
  },
  {
    "question": "11. ¿El contenido de qué archivo local debe transmitirse a un servidor SSH remoto para poder iniciar sesión con llaves SSH?",
    "options": [
      "A. ~/.ssh/authorized_keys",
      "B. ~/.ssh/config",
      "C. ~/.ssh/id_rsa.pub",
      "D. ~/.ssh/id_rsa",
      "E. ~/.ssh/known_hosts"
    ],
    "answer": "C",
    "explicacion": "Debes transmitir tu clave pública (.pub) al servidor remoto, donde se agregará al archivo authorized_keys del servidor.",
    "pista": "Llaves autorizadas."
  },
  {
    "question": "12. ¿Cuál es el nombre del proyecto de escáner de seguridad de red que, en su núcleo, es un servidor con un conjunto de pruebas de vulnerabilidad?",
    "options": [
      "A. NetMap",
      "B. OpenVAS",
      "C. Smartscan",
      "D. Wireshark"
    ],
    "answer": "B",
    "explicacion": "OpenVAS es el principal sistema de evaluación de vulnerabilidades de código abierto.",
    "pista": "Vulnerability Assessment System."
  },
  {
    "question": "13. Con fail2ban, ¿qué es un 'jail' (cárcel)?",
    "options": [
      "A. Una cadena de reglas de netfilter para un servicio particular.",
      "B. Un grupo de servicios monitoreados.",
      "C. Una definición de filtro y un conjunto de acciones cuando hay coincidencia.",
      "D. El entorno chroot en el que se ejecuta fail2ban."
    ],
    "answer": "C",
    "explicacion": "Un jail de fail2ban combina un filtro (log) con una acción (bloqueo).",
    "pista": "Filtro + Acción."
  },
  {
    "question": "14. El programa vsftpd en una cárcel chroot da el error: 'libc.so.6: cannot open shared object file'. ¿Cómo solucionarlo?",
    "options": [
      "A. Añadir la ruta de la cárcel a /etc/ld.so.conf.",
      "B. Crear un enlace simbólico fuera de la cárcel.",
      "C. Copiar la biblioteca al directorio lib de la cárcel.",
      "D. Ejecutar chroot con --static_libs."
    ],
    "answer": "C",
    "explicacion": "Los programas en chroot no pueden acceder a archivos fuera; las librerías deben estar dentro.",
    "pista": "Librerías dentro de la prisión."
  },
  {
    "question": "15. ¿Qué parámetro de configuración de Samba es funcionalmente idéntico a 'read only = yes'?",
    "options": [
      "A. browseable = no",
      "B. read write = no",
      "C. writeable = no",
      "D. write only = no",
      "E. write access = no"
    ],
    "answer": "C",
    "explicacion": "'writeable = no' es el sinónimo inverso de 'read only = yes'.",
    "pista": "¿Es escribible?"
  },
  {
    "question": "16. ¿Cómo debe configurarse Samba para que pueda verificar las contraseñas CIFS contra las que se encuentran en /etc/passwd y /etc/shadow?",
    "options": [
      "A. encrypt passwords = no",
      "B. encrypt passwords = yes y password file = /etc/passwd",
      "C. Crear un enlace simbólico a passwd y shadow.",
      "D. No es posible que Samba use /etc/passwd y /etc/shadow directamente.",
      "E. Convertirlos con smbpasswd."
    ],
    "answer": "D",
    "explicacion": "Samba usa algoritmos de hash distintos a los de Linux, por lo que no son compatibles directamente.",
    "pista": "Incompatibilidad de cifrado."
  },
  {
    "question": "17. ¿En qué recurso compartido CIFS deben colocarse los controladores de impresora para Point'n'Print en Windows?",
    "options": [
      "A. winx64drv$",
      "B. print$",
      "C. Especificado en smb.conf por recurso.",
      "D. pnpdrivers$",
      "E. NETLOGON"
    ],
    "answer": "B",
    "explicacion": "Los clientes Windows buscan el recurso 'print$' para descargar drivers automáticamente.",
    "pista": "Recurso administrativo estándar para impresoras."
  },
  {
    "question": "18. ¿Qué servicio de Samba maneja la membresía de un servidor de archivos en un dominio de Active Directory?",
    "options": [
      "A. winbindd",
      "B. nmbd",
      "C. msadd",
      "D. admemb",
      "E. samba"
    ],
    "answer": "E",
    "explicacion": "El proceso 'samba' gestiona la integración con AD y la membresía del dominio.",
    "pista": "El nombre del servicio principal."
  },
  {
    "question": "19. ¿Qué afirmación es verdadera con respecto al pseudo sistema de archivos NFSv4?",
    "options": [
      "A. Debe llamarse /exports.",
      "B. Suele contener montajes vinculados (bind mounts) de los árboles a exportar.",
      "C. Debe ser una partición dedicada.",
      "D. Se define en /etc/pathmapd.conf.",
      "E. Suele contener enlaces simbólicos."
    ],
    "answer": "B",
    "explicacion": "NFSv4 usa una raíz única; los montajes vinculados traen directorios a esa raíz.",
    "pista": "Vincular carpetas."
  },
  {
    "question": "20. ¿Cómo se configura un recurso compartido de Samba 'oculto' llamado 'confidential'?",
    "options": [
      "A. [confidential]",
      "B. [ confidential]",
      "C. [#confidential]",
      "D. [  confidential]",
      "E. [confidential$]"
    ],
    "answer": "E",
    "explicacion": "Añadir '$' al final del nombre hace que sea invisible en las listas de navegación.",
    "pista": "El truco del signo de dólar."
  },
  
  {
    "question": "21. ¿Cuáles de las siguientes opciones son válidas en /etc/exports? (Elige dos)",
    "options": [
      "A. rw",
      "B. ro",
      "C. rootsquash",
      "D. norootsquash",
      "E. uid"
    ],
    "answer": "A, B",
    "explicacion": "rw (lectura/escritura) y ro (solo lectura) son las opciones básicas de permisos en NFS. 'rootsquash' es incorrecto (es root_squash).",
    "pista": "Permisos básicos de lectura/escritura."
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
    "explicacion": "El comando exportfs administra la tabla de sistemas de archivos exportados por NFS sin necesidad de reiniciar el servicio.",
    "pista": "Exportar sistemas de archivos."
  },
  {
    "question": "23. ¿Cuál de estas herramientas, sin ninguna opción, proporciona la mayor cantidad de información al realizar consultas DNS?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "A",
    "explicacion": "dig es la herramienta más verbosa por defecto, mostrando las secciones de pregunta, respuesta, autoridad y adicionales.",
    "pista": "Herramienta preferida para diagnósticos detallados."
  },
  {
    "question": "24. Al realizar una búsqueda DNS con dig se obtiene una respuesta donde falta un punto final en un registro PTR. ¿Cuál es la causa más probable?",
    "options": [
      "A. No hay punto después del nombre en el registro PTR de la zona directa.",
      "B. No hay punto después del nombre de host.",
      "C. No hay punto después del nombre FQDN en el registro PTR en el archivo de zona inversa.",
      "D. El punto en la definición NS debe ser eliminado."
    ],
    "answer": "C",
    "explicacion": "En los archivos de zona BIND, si un FQDN no termina en punto, se le añade el dominio de origen ($ORIGIN), causando errores en registros PTR.",
    "pista": "El punto final es crucial en FQDN."
  },
  {
    "question": "25. ¿Qué opción para BIND se requiere en las opciones globales para deshabilitar las consultas recursivas en el servidor DNS por defecto?",
    "options": [
      "A. allow-recursive-query (none; );",
      "B. allow-recursive-query off;",
      "C. recursion { disabled; };",
      "D. recursion { none; };",
      "E. recursion no;"
    ],
    "answer": "E",
    "explicacion": "La directiva 'recursion no;' en la sección options deshabilita la recursión globalmente.",
    "pista": "Sintaxis simple: opción + no."
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
    "explicacion": "Un glue record es un registro A simple que proporciona la IP de un servidor de nombres que está dentro del propio dominio que delega.",
    "pista": "Es un registro tipo A."
  },
  {
    "question": "27. ¿Para qué se utiliza DNSSEC?",
    "options": [
      "A. Consultas DNS cifradas entre servidores de nombres.",
      "B. Autenticación criptográfica de zonas DNS.",
      "C. Consultas DNS secundarias para zonas locales.",
      "D. Autenticación del usuario que inició la consulta DNS.",
      "E. Cifrado de consultas y respuestas DNS."
    ],
    "answer": "B",
    "explicacion": "DNSSEC firma digitalmente los registros para asegurar que la información no ha sido alterada (integridad y autenticidad), pero no cifra el tráfico.",
    "pista": "Seguridad mediante firmas, no cifrado."
  },
  {
    "question": "28. ¿Qué palabra falta en el siguiente extracto de named.conf? '_______ friends { 10.10.0.0/24; 192.168.1.0/24; };'",
    "options": [
      "A. networks",
      "B. net",
      "C. list",
      "D. acl",
      "E. group"
    ],
    "answer": "D",
    "explicacion": "La palabra clave 'acl' se usa para definir listas de control de acceso con alias nombrados para grupos de redes.",
    "pista": "Lista de Control de Acceso."
  },
  {
    "question": "29. En un archivo de zona BIND, ¿qué indica el carácter @?",
    "options": [
      "A. Es el nombre de host totalmente cualificado (FQDN) del servidor DNS.",
      "B. Es un alias para la dirección de correo electrónico del maestro de zona.",
      "C. Es el nombre de la zona tal como se define en la declaración zone en named.conf.",
      "D. Se utiliza para crear un alias entre dos entradas CNAME."
    ],
    "answer": "C",
    "explicacion": "El símbolo @ se expande al valor de $ORIGIN, que es el nombre de la zona definido en named.conf.",
    "pista": "Sustituto del nombre de la zona."
  },
  {
    "question": "30. ¿Qué opción de BIND se debe utilizar para limitar las direcciones IP desde las cuales se pueden conectar los servidores de nombres esclavos para descargar la zona?",
    "options": [
      "A. allow-zone-transfer",
      "B. allow-transfer",
      "C. allow-secondary",
      "D. allow-slaves",
      "E. allow-queries"
    ],
    "answer": "B",
    "explicacion": "allow-transfer define qué IPs tienen permiso para solicitar una transferencia de zona (AXFR/IXFR).",
    "pista": "Permitir transferencia."
  },
  {
    "question": "31. Se ha protegido un directorio en Apache con .htaccess y AuthType Basic. Si el usuario y contraseña son correctos en .htpasswd, ¿qué sucede?",
    "options": [
      "A. El usuario puede acceder al sitio.",
      "B. Se genera un código de error HTTP 442.",
      "C. Se responde con código de error HTTP 500.",
      "D. El navegador solicita credenciales pero el login falla.",
      "E. El servidor entrega contenido sin pedir autenticación."
    ],
    "answer": "A",
    "explicacion": "Si la configuración es correcta y las credenciales coinciden, Apache otorga acceso (código 200).",
    "pista": "El comportamiento normal de éxito."
  },
  {
    "question": "32. ¿Qué directiva de Apache HTTPD habilita el soporte del protocolo HTTPS?",
    "options": [
      "A. HTTPSEngine on",
      "B. SSLEngine on",
      "C. SSLEnable on",
      "D. HTTPSEnable on",
      "E. StartTLS on"
    ],
    "answer": "B",
    "explicacion": "SSLEngine on es la directiva estándar dentro de un VirtualHost para activar el procesamiento SSL/TLS.",
    "pista": "Motor SSL."
  },
  {
    "question": "33. ¿Qué directiva de configuración del servidor Apache HTTPD define dónde se almacenan los archivos de registro de errores? (Especifica SOLO el nombre)",
    "answer": "ErrorLog",
    "explicacion": "ErrorLog define la ruta del archivo donde se guardarán los errores del servidor.",
    "pista": "Registro de Errores."
  },
  {
    "question": "34. ¿Qué afirmaciones sobre las directivas Alias y Redirect en Apache son verdaderas? (Elige dos)",
    "options": [
      "A. Alias solo puede referenciar archivos bajo DocumentRoot.",
      "B. Redirect funciona con expresiones regulares.",
      "C. Redirect se maneja en el lado del cliente (navegador).",
      "D. Alias se maneja en el lado del servidor.",
      "E. Alias no es una directiva válida."
    ],
    "answer": "C, D",
    "explicacion": "Alias mapea una URL a una ruta de archivo interna (servidor), mientras que Redirect envía un código 3xx al navegador para que pida una nueva URL (cliente).",
    "pista": "Uno es interno, el otro avisa al navegador."
  },
  {
    "question": "35. ¿Qué directiva http_access para Squid permite a la ACL 'sales_net' acceder solo en el horario 'sales_time'?",
    "options": [
      "A. http_access deny sales_time sales_net",
      "B. http_access allow sales_net sales_time",
      "C. http_access allow sales_net and sales-time",
      "D. allow http_access sales_net sales_time",
      "E. http_access sales_net sales_time"
    ],
    "answer": "B",
    "explicacion": "En Squid, se listan las ACLs consecutivas. Deben cumplirse ambas (AND implícito) para que la regla 'allow' se aplique.",
    "pista": "allow red tiempo."
  },
  {
    "question": "36. ¿Qué opción global en squid.conf establece el puerto de escucha?",
    "options": [
      "A. port",
      "B. client_port",
      "C. http_port",
      "D. server_port",
      "E. squid_port"
    ],
    "answer": "C",
    "explicacion": "http_port (generalmente 3128) indica dónde escucha Squid las peticiones de los clientes.",
    "pista": "Puerto HTTP."
  },
  {
    "question": "37. Con mod_authz_core, ¿cuáles de las siguientes cadenas se pueden usar como argumento para 'Require'? (Elige tres)",
    "options": [
      "A. method",
      "B. all",
      "C. regex",
      "D. header",
      "E. expr"
    ],
    "answer": "A, B, E",
    "explicacion": "Se puede usar 'Require all granted', 'Require method GET' o 'Require expr' (expresiones lógicas).",
    "pista": "Todo, método o expresión."
  },
  {
    "question": "38. ¿Qué herramienta crea una Solicitud de Firma de Certificado (CSR) para Apache?",
    "options": [
      "A. apachectl",
      "B. certgen",
      "C. cartool",
      "D. httpsgen",
      "E. openssl"
    ],
    "answer": "E",
    "explicacion": "OpenSSL es la navaja suiza para criptografía y generación de CSR y claves privadas.",
    "pista": "La herramienta estándar de SSL."
  },
  {
    "question": "39. ¿Qué se debe hacer con un certificado intermedio en configuraciones clásicas de Apache?",
    "options": [
      "A. Fusionarlo con el certificado del servidor o referenciarlo en la cadena.",
      "B. Borrarlo.",
      "C. Guardarlo como CA root.",
      "D. Importarlo al navegador.",
      "E. Reenviarlo a la CA."
    ],
    "answer": "A",
    "explicacion": "El servidor debe enviar la cadena completa. En Apache 2.4+ se concatena en el archivo del certificado; en versiones viejas se usaba SSLCertificateChainFile.",
    "pista": "Debe servirse junto con el certificado principal."
  },
  {
    "question": "40. ¿Qué directiva en un bloque server de Nginx define los puertos TCP?",
    "answer": "listen",
    "explicacion": "La directiva 'listen' especifica la IP y el puerto (ej: listen 80;) donde el servidor aceptará conexiones.",
    "pista": "Escuchar."
  },
  
  
  
  {
    "question": "41. Al intentar realizar un proxy inverso de un servidor web a través de Nginx, ¿qué palabra clave falta en el siguiente ejemplo de configuración? 'location / { ________ http://proxiedserver:8080; }'",
    "options": [
      "A. remote_proxy",
      "B. reverse_proxy",
      "C. proxy_reverse",
      "D. proxy_pass",
      "E. forward_to"
    ],
    "answer": "D",
    "explicacion": "La directiva 'proxy_pass' es la instrucción fundamental en Nginx para establecer la dirección del servidor proxy.",
    "pista": "Piensa en 'pasar' la solicitud a otro servidor."
  },
  {
    "question": "42. Si no hay una directiva de acceso (access directive), ¿cuál es la configuración por defecto para OpenLDAP?",
    "options": [
      "A. access to * by * read",
      "B. access to * by anonymous none by * read",
      "C. access to * by anonymous auth by * read",
      "D. access to * by anonymous by * write read"
    ],
    "answer": "B",
    "explicacion": "La política de seguridad por defecto restringe el acceso anónimo mientras permite lectura a usuarios autenticados.",
    "pista": "Deniega anónimos pero permite lectura a los demás."
  },
  {
    "question": "43. Un host llamado 'lpi' con la dirección MAC 08:00:26:4c:59:23 debe recibir siempre la IP 192.168.1.2 de un ISC DHCPD. ¿Qué configuración es correcta?",
    "options": [
      "A. host lpi { hardware-ethernet 08:00:26:4c:59:23; fixed-address 192.168.1.2; }",
      "B. host lpi { mac=08:00:2b:4c:59:23; ip=192.168.1.2; }",
      "C. host lpi 08:00:26:4c:59:23 192.168.1.2",
      "D. host lpi { hardware ethernet 08:00:26:4c:59:23; fixed-address 192.168.1.2; }"
    ],
    "answer": "D",
    "explicacion": "La sintaxis estándar de ISC DHCPD usa 'hardware ethernet' (con espacio) y 'fixed-address'.",
    "pista": "Busca el espacio entre 'hardware' y 'ethernet'."
  },
  {
    "question": "44. ¿Cómo se configura la cuenta del administrador de LDAP cuando las directivas rootdn y rootpw no están presentes en el archivo slapd.conf?",
    "options": [
      "A. Cuenta por defecto admin con contraseña admin.",
      "B. La cuenta se define mediante una ACL en slapd.conf.",
      "C. Cuenta por defecto admin sin contraseña.",
      "D. La cuenta se define en /etc/ldap.secret."
    ],
    "answer": "B",
    "explicacion": "Las Listas de Control de Acceso (ACL) pueden otorgar privilegios administrativos a DNs específicos.",
    "pista": "Los permisos se manejan vía ACL."
  },
  {
    "question": "45. ¿Qué módulo de PAM permite usar un archivo arbitrario con nombres de usuario/grupo y restricciones sobre los recursos disponibles del sistema?",
    "options": [
      "A. pam_filter",
      "B. pam_limits",
      "C. pam_listfile",
      "D. pam_unix"
    ],
    "answer": "B",
    "explicacion": "El módulo pam_limits establece límites de recursos (memoria, procesos, etc.), configurados en limits.conf.",
    "pista": "Se relaciona con los 'límites' del sistema."
  },
  {
    "question": "46. Según este LDIF: 'dn: cn=Robert Smith, ou=people, dc=example, dc=com', ¿a qué unidad organizativa pertenece Robert Smith? (Especifica solo la unidad)",
    "answer": "people",
    "explicacion": "El atributo 'ou' significa Organizational Unit (Unidad Organizativa), que aquí es 'people'.",
    "pista": "Busca el valor asignado a 'ou'."
  },
  {
    "question": "47. En un archivo de configuración de PAM, ¿qué es cierto sobre el flag de control 'required'?",
    "options": [
      "A. Si devuelve éxito, no se invocan más módulos de ese tipo.",
      "B. Se necesita éxito; si falla, el control vuelve a la aplicación inmediatamente.",
      "C. Se necesita éxito; sin embargo, todos los módulos restantes del mismo tipo siguen siendo invocados.",
      "D. El módulo no es crítico para el éxito."
    ],
    "answer": "C",
    "explicacion": "Un fallo en un módulo 'required' garantiza el fallo final, pero PAM sigue ejecutando el resto para no dar pistas de cuál falló.",
    "pista": "Fallo obligatorio pero la ejecución continúa."
  },
  {
    "question": "48. ¿Cuál es el nombre del elemento raíz del árbol LDAP que contiene la configuración de un servidor OpenLDAP que usa configuración basada en directorio? (Especifica SOLO el nombre)",
    "answer": "slapd",
    "explicacion": "La configuración basada en directorio (cn=config) se refiere a menudo por el nombre del demonio: slapd.",
    "pista": "Nombre del demonio principal de LDAP."
  },
  {
    "question": "49. ¿Cómo se organizan y almacenan los módulos de PAM?",
    "options": [
      "A. Archivos de texto plano en /etc/security/.",
      "B. Binarios enlazados estáticamente en /etc/pam.d/bin/.",
      "C. Módulos del kernel de Linux en /lib/modules/.",
      "D. Archivos de objetos compartidos (.so) dentro de la jerarquía /lib/."
    ],
    "answer": "D",
    "explicacion": "Los módulos PAM son librerías compartidas dinámicas ubicadas en /lib/ o /usr/lib/.",
    "pista": "Son bibliotecas compartidas."
  },
  {
    "question": "50. ¿Qué declaración en la configuración de ISC DHCPD especifica si un pool de direcciones puede ser usado por nodos con una sección 'host' correspondiente?",
    "options": [
      "A. identified-nodes",
      "B. unconfigured-hosts",
      "C. missing-peers",
      "D. unknown-clients"
    ],
    "answer": "D",
    "explicacion": "La palabra clave 'unknown-clients' controla si el servidor asigna IPs a hosts que no reconoce en sus declaraciones.",
    "pista": "Clientes 'desconocidos'."
  },
  {
    "question": "51. Para especificar alteraciones en una entrada LDAP, ¿qué palabra falta en este LDIF: 'changetype: _______'?",
    "answer": "add",
    "explicacion": "El changetype 'add' se usa para insertar nuevos registros en el directorio LDAP.",
    "pista": "Palabra común para añadir entradas."
  },
  {
    "question": "52. ¿Qué comando de cliente OpenLDAP se puede usar para cambiar la contraseña de una entrada LDAP? (Especifica SOLO el comando)",
    "answer": "ldappasswd",
    "explicacion": "ldappasswd es la utilidad específica para modificar contraseñas en el árbol LDAP.",
    "pista": "LDAP + Contraseña."
  },
  {
    "question": "53. ¿Qué opción de configuración de Postfix debe actualizarse para aceptar correo de dos dominios diferentes para todos los usuarios?",
    "options": [
      "A. mydomain",
      "B. mylocations",
      "C. mydestination",
      "D. myhosts"
    ],
    "answer": "C",
    "explicacion": "El parámetro 'mydestination' define los dominios para los cuales Postfix entregará correo localmente.",
    "pista": "El dominio es un 'destino' final."
  },
  {
    "question": "54. ¿Cuál es la ruta al archivo de configuración global de Postfix? (Especifica el nombre completo)",
    "answer": "/etc/postfix/main.cf",
    "explicacion": "main.cf es el archivo de configuración principal de Postfix.",
    "pista": "Empieza por /etc y termina en .cf."
  },
  {
    "question": "55. ¿Cuándo se suelen aplicar los filtros Sieve a un correo electrónico?",
    "options": [
      "A. Cuando el correo se entrega a un buzón.",
      "B. Cuando el correo es retransmitido por un servidor SMTP.",
      "C. Cuando se recibe por un smarthost SMTP.",
      "D. Cuando es recuperado por un MUA."
    ],
    "answer": "A",
    "explicacion": "Los filtros Sieve actúan durante la fase de entrega final al buzón del usuario.",
    "pista": "En el momento de la 'entrega'."
  },
  {
    "question": "56. ¿Qué acciones ayudan a evitar que un servidor de correo sea un 'open relay' (retransmisor abierto)? (Elige dos)",
    "options": [
      "A. Restringir Postfix para aceptar correo solo para dominios locales.",
      "B. Configurar Dovecot para IMAP.",
      "C. No permitir el puerto 25 en redes públicas.",
      "D. Restringir Postfix para que solo retransmita SMTP saliente desde la red interna.",
      "E. Usar el formato maildir."
    ],
    "answer": "A, D",
    "explicacion": "Para evitar el open relay se debe limitar quién puede enviar 'a través' del servidor y a qué 'destinos'.",
    "pista": "Filtra por dominios locales para la entrada y por red interna para la salida"
  },
  {
    "question": "57. Para ver el nombre de usuario y la IP del par en 'ps ax' para Dovecot, ¿qué opción debe activarse?",
    "options": [
      "A. --with-linux-extprocnames",
      "B. sys.ps.allow_descriptions",
      "C. proc.all.show_status",
      "D. verbose_proctitle",
      "E. process_format"
    ],
    "answer": "D",
    "explicacion": "La opción 'verbose_proctitle' permite a Dovecot mostrar detalles de la conexión en la lista de procesos.",
    "pista": "El título del proceso es 'verboso'."
  },
  {
    "question": "58. ¿Qué comando de Postfix reconstruye todos los archivos de base de datos de alias sin argumentos?",
    "options": [
      "A. makealiases",
      "B. newaliases",
      "C. postalias",
      "D. postmapbuild"
    ],
    "answer": "B",
    "explicacion": "newaliases actualiza la base de datos de alias de correo.",
    "pista": "Crear 'nuevos' alias."
  },
  {
    "question": "59. ¿Qué acción en un filtro Sieve reenvía un mensaje sin cambiarlo? (Especifica SOLO la acción)",
    "answer": "redirect",
    "explicacion": "El comando 'redirect' en Sieve envía una copia del correo original a otra dirección.",
    "pista": "Sinónimo de redireccionar."
  },
  {
    "question": "60. ¿Cuál de los siguientes mecanismos de autenticación son compatibles con Dovecot? (Elige tres)",
    "options": [
      "A. ldap",
      "B. digest-md5",
      "C. cram-md5",
      "D. plain",
      "E. krb5"
    ],
    "answer": "B",
    "explicacion": "Dovecot soporta varios mecanismos SASL, incluyendo PLAIN, CRAM-MD5 y DIGEST-MD5.",
    "pista": "Métodos MD5 y texto claro."
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
    "explicacion": "NFSv4 utiliza rpc.idmapd para el mapeo de nombres de usuario y grupos a IDs, sustituyendo el manejo puramente numérico de versiones anteriores.",
    "pista": "Demonio de mapeo de IDs."
  },
  {
    "question": "62. ¿Cuál de las siguientes acciones sincroniza las contraseñas de UNIX con las de Samba cuando la contraseña cifrada de Samba se cambia usando smbpasswd?",
    "options": [
      "A. No es posible realizar esta acción.",
      "B. Ejecutar netvamp regularmente para convertir las contraseñas.",
      "C. Ejecutar winbind sync para sincronizar las contraseñas.",
      "D. Añadir 'unix password sync = yes' a smb.conf",
      "E. Añadir 'smb unix password sync' a smb.conf"
    ],
    "answer": "D",
    "explicacion": "El parámetro 'unix password sync' en smb.conf indica a Samba que intente actualizar la contraseña de UNIX local simultáneamente.",
    "pista": "Sincronización de contraseñas en smb.conf."
  },
  {
    "question": "63. Para unir con éxito un servidor miembro a un dominio de Active Directory, ¿qué acción es a menudo necesaria si 'net ads join' falla debido a problemas de mapeo de ID?",
    "options": [
      "A. Cambiar el rol del servidor a ad member server.",
      "B. Añadir el realm y cambiar el workgroup.",
      "C. Crear una cuenta de máquina manualmente.",
      "D. Eliminar winbind enum users.",
      "E. Eliminar todas las estrofas de configuración de idmap."
    ],
    "answer": "E",
    "explicacion": "Cuando el mapeo de IDs se gestiona globalmente en el dominio AD, las configuraciones locales de idmap pueden causar conflictos y deben eliminarse.",
    "pista": "Eliminar definiciones de mapeo local."
  },
  {
    "question": "64. Para exportar /usr y /bin vía NFSv4 con montajes vinculados (bind mounts), ¿qué opción en /etc/exports podría necesitar modificación para que la carpeta raíz sea visible? (Especifica SOLO el nombre de la opción)",
    "answer": "mount",
    "explicacion": "Las opciones 'mount' o 'crossmnt' son críticas para que el cliente pueda ver la jerarquía de exportaciones en NFSv4.",
    "pista": "Relacionado con puntos de montaje."
  },
  {
    "question": "65. ¿Qué confirma el comando 'samba-tool testparm' con respecto a la configuración de Samba?",
    "options": [
      "A. La configuración se carga correctamente.",
      "B. El servicio funciona como se espera.",
      "C. Los servicios de Samba se inician automáticamente.",
      "D. La configuración de netfilter no bloquea el acceso.",
      "E. Todos los procesos utilizan la versión más reciente."
    ],
    "answer": "A",
    "pista": "Validación del archivo de configuración."
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
    "explicacion": "'security = share' permite el acceso a recursos específicos sin necesidad de cuentas de usuario individuales.",
    "pista": "Seguridad basada en recursos compartidos."
  },
  {
    "question": "67. Si las máquinas cableadas (192.168.1.0/24) no pueden acceder a Samba, ¿qué declaración 'host allow' las permite sin denegar a los demás? (Elige dos)",
    "options": [
      "A. host allow 192.168.1.1-255",
      "B. host allow 192.168.1.100 192.168.2.200 localhost",
      "C. host deny 192.168.1.100/255.255.255.0",
      "D. host allow 192.168.1.0/255.255.255.0",
      "E. host allow localhost"
    ],
    "answer": "D",
    "explicacion": "Especificar la subred completa con su máscara es la forma estándar de permitir un rango en Samba.",
    "pista": "Permitir subred y loopback."
  },
  {
    "question": "68. ¿Qué comando muestra las estadísticas del kernel de NFS? (Especifica SOLO el comando)",
    "answer": "nfsstat",
    "explicacion": "nfsstat muestra estadísticas del kernel sobre las partes cliente y servidor de NFS.",
    "pista": "NFS + Estadísticas."
  },
  {
    "question": "69. ¿Qué palabra clave se utiliza en la configuración de Squid para definir redes y horarios utilizados para limitar el acceso?",
    "options": [
      "A. acl",
      "B. allow",
      "C. http_allow",
      "D. permit"
    ],
    "answer": "A",
    "explicacion": "Las ACL (Listas de Control de Acceso) definen grupos de IPs o períodos de tiempo para el filtrado en Squid.",
    "pista": "Access Control List."
  },
  {
    "question": "70. Cuando un VirtualHost tiene dos directivas ServerName y falla, ¿cuál es el cambio correcto?",
    "options": [
      "A. Dividir en dos secciones VirtualHost.",
      "B. Añadir el puerto a ServerName.",
      "C. Usar valores separados por comas en un solo ServerName.",
      "D. Mencionar ambos en la etiqueta de apertura.",
      "E. Usar ServerAlias para nombres adicionales."
    ],
    "answer": "E",
    "explicacion": "Para múltiples nombres en un mismo host virtual se utiliza ServerAlias; ServerName solo debe aparecer una vez por bloque.",
    "pista": "Alias para el servidor."
  },
  {
    "question": "71. Dado 'cache_dir ufs /var/spool/squid3/ 1024 16 256', ¿qué directorios existen directamente dentro del spool? (Elige dos)",
    "options": [
      "A. 0F",
      "B. A0",
      "C. 0b",
      "D. FF",
      "E. 00"
    ],
    "answer": "A, E",
    "explicacion": "Squid organiza su caché en subdirectorios hexadecimales de dos dígitos (como 00 o 0F).",
    "pista": "Nombres en hexadecimal."
  },
  {
    "question": "72. ¿Cuáles de las siguientes afirmaciones son verdaderas sobre Server Name Indication (SNI)? (Elige dos)",
    "options": [
      "A. Soporta conmutación por error transparente de TLS.",
      "B. Permite múltiples hosts virtuales SSL/TLS en una sola dirección IP.",
      "C. Actualiza el DNS mediante certificados X.509.",
      "D. Proporciona una lista de hosts al cliente.",
      "E. Envía el nombre de host de la URL solicitada durante el saludo TLS (handshake)."
    ],
    "answer": "B, E",
    "explicacion": "SNI (Server Name Indication) permite que un servidor web aloje múltiples sitios con SSL/TLS usando una sola dirección IP. Esto es posible porque el cliente envía el nombre del dominio deseado durante el inicio de la conexión (handshake), permitiendo al servidor mostrar el certificado correcto.",
    "pista": "Hosting virtual para SSL/TLS compartiendo IP."
  },
  {
    "question": "73. ¿Qué directiva de Apache especifica la llave privada RSA utilizada en la generación del certificado SSL?",
    "options": [
      "A. SSLCertificateKeyFile",
      "B. SSLKeyFile",
      "C. SSLPrivateKeyFile",
      "D. SSLRSAKeyFile"
    ],
    "answer": "A",
    "explicacion": "La directiva SSLCertificateKeyFile apunta al archivo de la llave privada codificado en PEM.",
    "pista": "Archivo de la llave del certificado."
  },
  {
    "question": "74. ¿Qué comando se utiliza para CAMBIAR la contraseña de usuarios existentes en un archivo sitepasswd de autenticación básica?",
    "options": [
      "A. htpasswd -c /ruta/al/archivo usuario",
      "B. htpasswd /ruta/al/archivo usuario",
      "C. htpasswd -n /ruta/al/archivo usuario",
      "D. htpasswd -D /ruta/al/archivo usuario"
    ],
    "answer": "B",
    "explicacion": "Para actualizar un usuario existente no se usa -c (que crearía/sobrescribiría el archivo completo); simplemente se indica la ruta y el usuario.",
    "pista": "Uso estándar de htpasswd."
  },
  {
    "question": "75. ¿Qué directiva de Apache especifica el método de autenticación, como Basic?",
    "options": [
      "A. AuthUser",
      "B. AllowedAuthUser",
      "C. AuthType",
      "D. AllowAuth"
    ],
    "answer": "C",
    "explicacion": "AuthType selecciona el tipo de autenticación de usuario (por ejemplo, Basic o Digest).",
    "pista": "El 'tipo' de autenticación."
  },
  {
    "question": "76. ¿Cuáles de las siguientes son directivas de registro (logging) en Apache HTTPD? (Elige dos)",
    "options": [
      "A. TransferLog",
      "B. CustomLog",
      "C. ErrorLog",
      "D. ServerLog",
      "E. VHostLog"
    ],
    "answer": "A",
    "explicacion": "TransferLog y CustomLog definen el formato y la ubicación de los registros de acceso.",
    "pista": "Directivas relacionadas con el acceso."
  },
  {
    "question": "77. ¿Qué opción dentro de una sección 'server' de Nginx define la ruta del sistema de archivos para el contenido del servidor?",
    "options": [
      "A. location",
      "B. htdocs",
      "C. DocumentRoot",
      "D. root",
      "E. base_dir"
    ],
    "answer": "D",
    "explicacion": "La directiva 'root' establece el directorio base donde se buscarán los archivos.",
    "pista": "Carpeta raíz de Nginx."
  },
  {
    "question": "78. Con Nginx, ¿qué directiva se utiliza para pasar solicitudes a una aplicación FastCGI?",
    "options": [
      "A. fastcgi_pass",
      "B. fastcgi_proxy",
      "C. proxy_fastcgi",
      "D. proxy_fastcgi_pass",
      "E. fastcgi_forward"
    ],
    "answer": "A",
    "explicacion": "fastcgi_pass especifica la dirección del servidor FastCGI al que se enviarán las peticiones.",
    "pista": "Pasar a FastCGI."
  },
  {
    "question": "79. ¿Qué información debe enviarse a una CA para solicitar un certificado de servidor web?",
    "options": [
      "A. La llave privada del servidor.",
      "B. La dirección IP del servidor.",
      "C. La lista de cifrados soportados.",
      "D. El archivo de configuración SSL del servidor.",
      "E. La solicitud de firma de certificado (CSR)."
    ],
    "answer": "E",
    "explicacion": "La CSR (Certificate Signing Request) es el documento formal que se envía a la CA.",
    "pista": "Acrónimo CSR."
  },
  {
    "question": "80. ¿Para qué propósito utiliza nmap el 'TCP/IP stack fingerprinting'?",
    "options": [
      "A. Para determinar el sistema operativo remoto.",
      "B. Para filtrar respuestas.",
      "C. Para identificar respuestas duplicadas.",
      "D. Para enmascarar respuestas.",
      "E. Para identificar servidores en análisis forense."
    ],
    "answer": "A",
    "explicacion": "El fingerprinting analiza cómo responde un sistema a paquetes específicos para identificar su SO.",
    "pista": "Detección de Sistema Operativo."
  },
  {
    "question": "81. Para permitir que las conexiones X se reenvíen desde o a través de un servidor SSH, ¿qué palabra clave de configuración debe establecerse en 'yes' en el archivo sshd_config?",
    "options": [
      "A. AllowForwarding",
      "B. ForwardingAllow",
      "C. X11ForwardingAllow",
      "D. X11Forwarding"
    ],
    "answer": "D",
    "explicacion": "La directiva X11Forwarding permite el túnel de aplicaciones gráficas sobre la conexión SSH.",
    "pista": "Relacionado con el sistema X Window."
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
    "explicacion": "El puerto 1194 es el oficial asignado por IANA para el tráfico de OpenVPN.",
    "pista": "Un puerto por encima del 1000 usado para VPN."
  },
  {
    "question": "83. ¿Qué opción en el archivo de configuración de sshd indica a sshd que permita solo nombres de usuario específicos para iniciar sesión? (Especifica SOLO el nombre de la opción)",
    "answer": "AllowUsers",
    "explicacion": "AllowUsers crea una lista blanca de usuarios permitidos; el resto son denegados por defecto.",
    "pista": "Lo opuesto a DenyUsers."
  },
  {
    "question": "84. Usando su configuración estándar, ¿cómo bloquea fail2ban a los clientes SSH infractores?",
    "options": [
      "A. Rechazando conexiones actuando como proxy delante de SSHD.",
      "B. Modificando y ajustando la configuración de SSHD.",
      "C. Creando y manteniendo reglas de netfilter.",
      "D. Creando rutas nulas que descartan cualquier paquete enviado al cliente.",
      "E. Ajustando la configuración de TCP Wrapper para SSHD."
    ],
    "answer": "C",
    "explicacion": "Fail2ban monitorea logs y ejecuta comandos de firewall (como iptables) para bloquear IPs.",
    "pista": "Interactúa con el cortafuegos del sistema."
  },
  {
    "question": "85. ¿Qué nombres de FTP se reconocen como usuarios anónimos en vsftpd cuando la opción anonymous_enable está activa? (Elige dos)",
    "options": [
      "A. anonymous",
      "B. ftp",
      "C. Cualquier nombre de usuario que no exista.",
      "D. nobody",
      "E. guest"
    ],
    "answer": "A",
    "explicacion": "Por defecto, vsftpd trata tanto 'anonymous' como 'ftp' como inicios de sesión anónimos.",
    "pista": "El nombre del protocolo y el término estándar."
  },
  {
    "question": "86. ¿Cuáles de los siguientes comandos se pueden usar para conectar e interactuar con servicios de red TCP remotos? (Elige dos)",
    "options": [
      "A. nettalk",
      "B. nc",
      "C. telnet",
      "D. cat",
      "E. netmap"
    ],
    "answer": "B, C",
    "explicacion": "Netcat (nc) y Telnet permiten abrir conexiones TCP crudas a cualquier puerto.",
    "pista": "La 'navaja suiza' y la clásica consola remota."
  },
  {
    "question": "87. ¿A qué destino aparecerá una ruta en la tabla de enrutamiento tras activar IPv6 en un router, incluso si no se han asignado direcciones IPv6 globales?",
    "options": [
      "A. fe80::/10",
      "B. 0::/128",
      "C. 0::/0",
      "D. fe80::/64",
      "E. 2000::/3"
    ],
    "answer": "A",
    "explicacion": "Las interfaces IPv6 generan automáticamente una dirección Link-Local con el prefijo fe80::/10.",
    "pista": "Prefijo para direcciones Link-Local."
  },
  {
    "question": "88. Para evitar que los usuarios FTP anónimos listen los nombres de archivos subidos, ¿qué precaución de seguridad se debe tomar al crear el directorio de subida?",
    "options": [
      "A. No debe tener el permiso de ejecución (x).",
      "B. No debe tener el permiso de lectura (r).",
      "C. No debe tener permisos de lectura ni ejecución.",
      "D. No debe tener el permiso de escritura (w).",
      "E. No debe contener otros directorios."
    ],
    "answer": "B",
    "explicacion": "Quitar el permiso de lectura (r) impide listar el contenido, aunque se pueda entrar si tiene ejecución (x).",
    "pista": "Permiso necesario para 'listar' archivos."
  },
  {
    "question": "89. ¿Qué comando se utiliza para administrar las reglas de netfilter para IPv6?",
    "options": [
      "A. iptables",
      "B. iptablesv6",
      "C. iptables6",
      "D. ip6tables",
      "E. ipv6tables"
    ],
    "answer": "D",
    "explicacion": "ip6tables es el equivalente para IPv6 de la herramienta iptables de IPv4.",
    "pista": "Similar a iptables pero con un 6."
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
    "explicacion": "La tabla 'filter' es la tabla por defecto para el filtrado de paquetes.",
    "pista": "La tabla más usada para cortafuegos."
  },
  {
    "question": "91. Tras ejecutar ssh-keygen aceptando los valores por defecto, ¿qué archivos se crean o cambian? (Elige dos)",
    "options": [
      "A. ~/.ssh/id_rsa.key",
      "B. ~/.ssh/id_rsa.pub",
      "C. ~/.ssh/id_rsa.prv",
      "D. ~/.ssh/id_rsa.crt",
      "E. ~/.ssh/id_rsa"
    ],
    "answer": "B, E",
    "explicacion": "Se generan la llave privada (id_rsa) y la pública (id_rsa.pub) en el directorio .ssh.",
    "pista": "Los archivos de llave pública y privada."
  },
  {
    "question": "92. ¿Qué opción de configuración de OpenVPN hace que reenvíe paquetes entre clientes VPN internamente en lugar de pasarlos al host?",
    "options": [
      "A. inter-client-traffic",
      "B. client-to-client",
      "C. client-router",
      "D. client-pass",
      "E. grant-client-traffic"
    ],
    "answer": "B",
    "explicacion": "La directiva 'client-to-client' permite que los clientes se vean entre sí sin salir al firewall del host.",
    "pista": "Tráfico de cliente a cliente."
  },
  {
    "question": "93. ¿Cuál de estas herramientas proporciona información DNS en el formato: 'www.example.com has address 172.25.25.55'?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "C",
    "explicacion": "El comando 'host' devuelve resúmenes simples y legibles en ese formato específico.",
    "pista": "Herramienta simple para búsquedas rápidas."
  },
  {
    "question": "94. ¿Qué subcomando de rndc se usa con el nombre de una zona para que BIND relea el contenido de ese archivo de zona específico?",
    "options": [
      "A. lookup",
      "B. reload",
      "C. fileupdate",
      "D. reread",
      "E. zoneupdate"
    ],
    "answer": "B",
    "explicacion": "Usar 'rndc reload <zona>' refresca solo la zona indicada sin afectar al resto.",
    "pista": "Comando para refrescar configuración."
  },
  {
    "question": "95. Un archivo de zona para 'example.com' contiene 'host2.example.org. IN A 198.51.100.102'. ¿Cuál es el problema?",
    "options": [
      "A. Debe contener cross-zone-data yes;.",
      "B. La zona no puede contener registros fuera de su jerarquía.",
      "C. La declaración $ORIGIN no puede usarse en archivos de zona incluidos para un nombre específico.",
      "D. Un registro A no puede contener una IP.",
      "E. Los nombres no pueden ser FQDNs."
    ],
    "answer": "C",
    "explicacion": "Si la zona se define en named.conf, BIND espera que el archivo coincida; $ORIGIN puede causar conflictos.",
    "pista": "Relacionado con la declaración $ORIGIN."
  },
  {
    "question": "96. ¿Cuál de los siguientes tipos de registro DNS se utiliza para consultas inversas?",
    "options": [
      "A. CNAME",
      "B. IN",
      "C. PTR",
      "D. REV",
      "E. RIN"
    ],
    "answer": "C",
    "explicacion": "Los registros PTR (Pointer) mapean una IP a un nombre de host.",
    "pista": "Apunta la IP al nombre."
  },
  {
    "question": "97. Según la configuración del registro SOA: 'mars.example.com pluto.example.com', ¿cuál es el correo del administrador?",
    "answer": "pluto@example.com",
    "explicacion": "En un SOA, el segundo campo de nombre representa el correo, cambiando el primer punto por una @.",
    "pista": "El segundo host en un SOA es un correo."
  },
  {
    "question": "98. ¿Cuál es el propósito de DANE?",
    "options": [
      "A. Verificar integridad de nombres vía DNS.",
      "B. Permitir actualizaciones dinámicas seguras.",
      "C. Invalidar información en servidores caché.",
      "D. Descubrir servidores que ofrecen un servicio específico.",
      "E. Verificar la asociación de certificados X.509 con nombres de host DNS."
    ],
    "answer": "E",
    "explicacion": "DANE usa registros TLSA para vincular certificados directamente a nombres de host en DNS.",
    "pista": "Vincula DNS con certificados SSL."
  },
  {
    "question": "99. Un servidor BIND debe usar hmac-md5 y la llave 'skrKc...'. ¿Cuál es la configuración correcta?",
    "options": [
      "A. TSIG server.example.com. { algorithm hmac-md5; secret \"...\"; };",
      "B. key server.example.com. { algorithm hmac-md5; secret skrKc...; };",
      "C. key server.example.com. { algorithm hmac-md5; secret \"skrKc...\"; };",
      "D. key server.example.com. { algorithm=hmac-md5; secret=\"...\"; };"
    ],
    "answer": "C",
    "explicacion": "La sintaxis correcta usa la palabra 'key' y el secreto debe ir entre comillas.",
    "pista": "Palabra clave 'key' y usa comillas."
  },
  {
    "question": "100. ¿Qué opción en named.conf especifica qué hosts pueden realizar consultas al servidor?",
    "options": [
      "A. allowed-hosts",
      "B. accept-query",
      "C. permit-query",
      "D. allow-query",
      "E. query-group"
    ],
    "answer": "D",
    "explicacion": "La directiva 'allow-query' define una ACL para los clientes permitidos.",
    "pista": "Permitir consultas."
  },
  {
    "question": "101. ¿Qué subcomando de doveadm muestra una lista de las conexiones actuales de Dovecot? (Especifica SOLO el comando)",
    "answer": "who",
    "explicacion": "El comando 'doveadm who' permite visualizar los usuarios conectados y sus direcciones IP en tiempo real.",
    "pista": "Piensa en el comando estándar de UNIX para ver quién está conectado."
  },
  {
    "question": "102. ¿Cuáles de las siguientes acciones están disponibles en los filtros principales de Sieve? (Elige tres)",
    "options": [
      "A. drop",
      "B. discard",
      "C. fileinto",
      "D. relay",
      "E. reject"
    ],
    "answer": "B, C, E",
    "explicacion": "Las acciones principales de Sieve incluyen descartar silenciosamente (discard), entregar a una carpeta (fileinto) y rechazar el mensaje (reject).",
    "pista": "Acciones para eliminar silenciosamente, archivar o devolver el correo."
  },
  {
    "question": "103. ¿Qué sentencias permiten combinaciones lógicas de condiciones en los filtros Sieve? (Elige dos)",
    "options": [
      "A. allof",
      "B. anyof",
      "C. noneof",
      "D. and",
      "E. or"
    ],
    "answer": "A, B",
    "explicacion": "Sieve utiliza 'allof' para la lógica Y (AND) y 'anyof' para la lógica O (OR).",
    "pista": "Busca términos que signifiquen 'todos' o 'alguno'."
  },
  {
    "question": "104. ¿Qué parámetro de configuración en un servidor Postfix modifica solo la dirección del remitente y no la del destinatario?",
    "options": [
      "A. alias_maps",
      "B. alias_rewrite_maps",
      "C. sender_canonical_maps",
      "D. sender_rewrite_maps"
    ],
    "answer": "C",
    "explicacion": "sender_canonical_maps se utiliza específicamente para reescribir las direcciones de origen.",
    "pista": "Relacionado con el 'remitente' (sender) y el mapeo canónico."
  },
  {
    "question": "105. ¿Qué opción en la configuración de Postfix hace que pase el correo a destinos externos a través de otro servidor SMTP? (Especifica SOLO el nombre de la opción)",
    "answer": "relayhost",
    "explicacion": "El parámetro 'relayhost' define el servidor de siguiente salto para el correo que no es local.",
    "pista": "Servidor utilizado para retransmitir (relay) el correo."
  },
  {
    "question": "106. ¿Cuál es el nombre de la variable de configuración de Dovecot que especifica la ubicación del correo del usuario?",
    "options": [
      "A. mbox",
      "B. mail_location",
      "C. user_dir",
      "D. maildir",
      "E. user_mail_dir"
    ],
    "answer": "B",
    "explicacion": "La directiva 'mail_location' indica a Dovecot dónde encontrar los buzones y en qué formato.",
    "pista": "Define dónde está 'ubicado' el 'correo'."
  },
  {
    "question": "107. En el archivo principal de Postfix, ¿cómo se continúan las definiciones de servicio en la siguiente línea?",
    "options": [
      "A. No es posible.",
      "B. La línea inicial debe terminar con una barra invertida (\\).",
      "C. La siguiente línea debe comenzar con un signo más (+).",
      "D. La siguiente línea debe comenzar con una indentación de espacio en blanco."
    ],
    "answer": "D",
    "explicacion": "Postfix considera que una línea que comienza con espacios es la continuación de la anterior.",
    "pista": "Uso de sangría o indentación."
  },
  {
    "question": "108. ¿Cuál de los siguientes comandos muestra una visión general del contenido de la cola de Postfix para identificar sitios que causan tráfico excesivo?",
    "options": [
      "A. mailtraf",
      "B. queuequery",
      "C. qshape",
      "D. postmap",
      "E. poststats"
    ],
    "answer": "C",
    "explicacion": "La utilidad qshape analiza la cola de mensajes y ayuda a detectar cuellos de botella.",
    "pista": "Forma de la cola (queue shape)."
  },
  {
    "question": "109. ¿Qué conjunto de entradas devuelve el siguiente comando? ldapsearch -x \"(|(cn=marie)(!(telephoneNumber=9*)))\"",
    "options": [
      "A. Entradas sin cn marie o sin teléfono que empiece por 9.",
      "B. Entradas con cn marie o sin teléfono que empiece por 9.",
      "C. Entradas con cn marie y teléfono que termine en 9.",
      "D. Entradas sin cn marie y sin teléfono que empiece por 9."
    ],
    "answer": "B",
    "explicacion": "El filtro LDAP utiliza el operador '|' (OR) para unir la coincidencia de nombre y la negación del teléfono.",
    "pista": "Lógica OR: coincide el nombre O el teléfono NO empieza por 9."
  },
  {
    "question": "110. ¿Qué tipos de asignaciones de direcciones IPv6 soporta DHCPv6? (Elige tres)",
    "options": [
      "A. Direcciones normales que pueden renovarse.",
      "B. Direcciones temporales que no pueden renovarse.",
      "C. Direcciones de lista negra.",
      "D. Prefijos IPv6.",
      "E. Direcciones anónimas."
    ],
    "answer": "A, B, D",
    "explicacion": "DHCPv6 admite asignaciones estándar (IA_NA), temporales (IA_TA) y delegación de prefijos (IA_PD).",
    "pista": "Normales, temporales y prefijos."
  },
  {
    "question": "111. ¿Qué atributo de un objeto en LDAP define qué otros atributos se pueden establecer para dicho objeto? (Especifica SOLO el nombre del atributo)",
    "answer": "objectClass",
    "explicacion": "La 'objectClass' determina el esquema y las reglas que debe seguir una entrada en LDAP.",
    "pista": "Clase del objeto."
  },
  {
    "question": "112. ¿Cuál de los siguientes comandos se utiliza para cambiar las contraseñas de los usuarios en un directorio OpenLDAP?",
    "options": [
      "A. setent",
      "B. ldpasswd",
      "C. olppasswd",
      "D. ldappasswd",
      "E. ldapchpw"
    ],
    "answer": "D",
    "explicacion": "ldappasswd es la herramienta cliente estándar para modificar contraseñas en el árbol LDAP.",
    "pista": "LDAP + Password."
  },
  {
    "question": "113. ¿Qué es correcto sobre este extracto de un archivo LDIF? 'dn: cn=PrintOperators,ou=Groups,dc=example,dc=com'",
    "options": [
      "A. dn es el nombre de dominio.",
      "B. o es el nombre del operador.",
      "C. cn es el nombre común (common name).",
      "D. dn es el nombre distinguido (distinguished name).",
      "E. DC es el contenedor de delegación."
    ],
    "answer": "D",
    "explicacion": "El DN identifica de forma única la ruta completa de una entrada en el directorio.",
    "pista": "Ruta absoluta de la entrada."
  },
  {
    "question": "114. ¿Cuál de las siguientes afirmaciones es INCORRECTA sobre el formato de archivo LDIF?",
    "options": [
      "A. Contiene una línea dn para indicar los atributos.",
      "B. Una línea en blanco separa las entradas.",
      "C. Los datos binarios requieren configuraciones específicas.",
      "D. El archivo LDIF acepta cualquier tipo de codificación de archivo."
    ],
    "answer": "D",
    "explicacion": "Los archivos LDIF requieren una codificación específica (UTF-8) y no son compatibles con cualquier formato arbitrario.",
    "pista": "Busca el error sobre la codificación universal."
  },
  {
    "question": "115. ¿Qué opción en el archivo de configuración de ISC DHCPD define las direcciones de los servidores DNS?",
    "options": [
      "A. domain-name-servers",
      "B. domain-server",
      "C. name-server",
      "D. servers"
    ],
    "answer": "A",
    "explicacion": "La opción 'domain-name-servers' envía las IPs de los resolutores DNS a los clientes.",
    "pista": "Servidores de nombres de dominio (en plural)."
  },
  {
    "question": "116. ¿Cuál de los siguientes módulos de PAM establece y anula variables de entorno?",
    "options": [
      "A. pam_set",
      "B. pam_shell",
      "C. pam-vars",
      "D. pam-env",
      "E. pam_export"
    ],
    "answer": "D",
    "explicacion": "El módulo pam_env gestiona el entorno de usuario durante la autenticación.",
    "pista": "Abreviatura de 'environment'."
  },
  {
    "question": "117. ¿Cuál de las siguientes líneas es válida en un archivo de configuración en /etc/pam.d/?",
    "options": [
      "A. auth required pam_unix.so try_first_pass nullok",
      "B. auth try_first_pass nullok, require pam_unix.so",
      "C. auth required:pam_unix.so(try_first_pass nullok)",
      "D. auth pam_unix.so (required try_first_pass nullok)"
    ],
    "answer": "A",
    "explicacion": "La estructura correcta es: tipo, control, módulo y argumentos.",
    "pista": "Sintaxis: tipo | control | módulo | argumentos."
  },
  {
    "question": "118. ¿Cuál es la forma correcta de deshabilitar el inicio de sesión para todos los usuarios excepto root?",
    "options": [
      "A. Usar pam_block con /etc/login.",
      "B. Usar pam_deny con /etc/deny.",
      "C. Usar pam_pwdb con /etc/pwdv.conf.",
      "D. Usar el módulo pam_nologin con el archivo /etc/nologin."
    ],
    "answer": "D",
    "explicacion": "El módulo pam_nologin impide el acceso si existe el archivo /etc/nologin.",
    "pista": "Usa el archivo 'nologin'."
  },
  {
    "question": "119. ¿Qué valores se pueden usar en el atributo olcBackend para especificar un motor de base de datos en OpenLDAP? (Elige tres)",
    "options": [
      "A. xml",
      "B. bdb",
      "C. passwd",
      "D. ldap",
      "E. text"
    ],
    "answer": "B, D, E",
    "explicacion": "Los motores de almacenamiento soportados incluyen bdb (Berkeley DB), ldap y archivos de texto.",
    "pista": "Tipos estándar de base de datos y proxy."
  }
];
