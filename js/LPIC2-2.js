const preguntasLPIC2_2 = [
    {
    "question": "1. En un router Linux, se ha habilitado el reenvío de paquetes (packet forwarding) para IPv4. Tras un reinicio, la máquina ya no reenvía paquetes IP de otros hosts. El comando 'echo 1 > /proc/sys/net/ipv4/ip_forward' resuelve el problema temporalmente. ¿Cuál de las siguientes opciones es la mejor manera de asegurar que este ajuste se mantenga tras los reinicios del sistema?",
    "options": [
        "A. Añadir 'echo 1 > /proc/sys/net/ipv4/ip_forward' al script de inicio de sesión del usuario root.",
        "B. Añadir 'echo 1 > /proc/sys/net/ipv4/ip_forward' al script de inicio de sesión de cualquier usuario.",
        "C. En /etc/sysctl.conf, cambiar 'net.ipv4.ip_forward' a 1.",
        "D. En /etc/rc.local, añadir 'net.ipv4.ip_forward = 1'.",
        "E. En /etc/sysconfig/iptables-config, añadir 'ipv4.ip_forward = 1'."
    ],
    "answer": "C",
    "explicacion": "El archivo /etc/sysctl.conf se utiliza para configurar los parámetros del kernel en tiempo de ejecución de forma permanente. La directiva net.ipv4.ip_forward es la forma estándar de controlar el enrutamiento a nivel de núcleo.",
    "pista": "Piensa en el comando 'sysctl' y su archivo de configuración permanente en /etc/."
    },
    {
    "question": "2. ¿Qué información se puede encontrar en el archivo especificado por el parámetro 'status' en un archivo de configuración de servidor OpenVPN? (Elige dos)",
    "options": [
      "A. Errores y advertencias generados por el demonio openvpn.",
      "B. Información de enrutamiento.",
      "C. Información estadística sobre el demonio openvpn en ejecución.",
      "D. Una lista de los clientes conectados actualmente.",
      "E. Un historial de todas las conexiones pasadas."
    ],
    "answer": "B, D",
    "explicacion": "El archivo de estado (status log) de OpenVPN se actualiza periódicamente y contiene la tabla de rutas virtuales y la lista de clientes con sus direcciones reales y bytes transferidos.",
    "pista": "Muestra el estado 'en vivo' de quién está conectado y hacia dónde va su tráfico."
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
    "explicacion": "Para mejorar la seguridad: 1) 'Protocol 2, 1' debe cambiarse a 'Protocol 2' para deshabilitar el protocolo v1 que es vulnerable. 2) 'PermitRootLogin yes' debe cambiarse a 'no' para evitar ataques de fuerza bruta directos al superusuario.",
    "pista": "Identifica qué opciones permiten protocolos antiguos o accesos administrativos directos que son considerados inseguros hoy en día."
   },
    {
    "question": "4. ¿Cuál de los siguientes parámetros de nmap escanea un objetivo en busca de puertos TCP abiertos? (Elige dos)",
    "options": [
      "A. -sO",
      "B. -sZ",
      "C. -sT",
      "D. -sU",
      "E. -sS"
    ],
    "answer": "C, E",
    "explicacion": "El parámetro -sT realiza un escaneo TCP Connect y -sS un escaneo TCP SYN (semi-abierto). -sU es para UDP y -sO para protocolos IP.",
    "pista": "Busca las opciones que se refieren a 'Connect' y 'SYN' scan."
  },
  {
    "question": "5. ¿Cuál de las siguientes afirmaciones es correcta con respecto a los comandos que se ejecutan en un router Linux? (Elige dos)\n\nip6tables -A FORWARD -s fe80::/64 -j DROP\nip6tables -A FORWARD -d fe80::/64 -j DROP",
    "options": [
        "A. Los paquetes con direcciones de origen o destino de fe80::/64 nunca aparecerán en la cadena FORWARD.",
        "B. Las reglas desactivan el reenvío de paquetes porque los nodos de la red siempre usan direcciones de fe80::/64 para identificar routers en sus tablas de enrutamiento.",
        "C. ip6tables devuelve un error en el segundo comando porque la red afectada ya forma parte de otra regla.",
        "D. Ambos comandos de ip6tables se completan sin mensajes de error ni advertencias.",
        "E. Las reglas suprimen cualquier configuración automática a través de anuncios de router (RA) o DHCPv6."
    ],
    "answer": "A, D",
    "explicacion": "Las direcciones que empiezan por fe80:: son de tipo 'Link-Local'. Estas direcciones no son enrutables y, por lo tanto, nunca deberían aparecer en la cadena FORWARD de un firewall (la cadena FORWARD solo maneja tráfico que entra por una interfaz y sale por otra). Además, la sintaxis de los comandos es correcta, por lo que no darán error.",
    "pista": "Recuerda que las direcciones fe80::/64 son 'Link-Local' y piensa en cómo fluyen los paquetes a través de las cadenas de iptables."
  },
  {
    "question": "6. ¿Qué opción en el archivo de configuración del cliente le diría a OpenVPN que use un puerto de origen dinámico al realizar una conexión con un par (peer)?",
    "options": [
      "A. src-port",
      "B. remote",
      "C. source-port",
      "D. nobind",
      "E. dynamic-bind"
    ],
    "answer": "D",
    "explicacion": "La directiva 'nobind' asegura que el cliente OpenVPN no se vincule a un puerto específico local, permitiendo que el sistema asigne uno dinámico.",
    "pista": "Indica que 'no se vincule' a un puerto fijo."
  },
  {
    "question": "7. ¿Qué usuario de Linux utiliza vsftpd para realizar operaciones en el sistema de archivos para los usuarios FTP anónimos?",
    "options": [
      "A. El usuario de Linux que ejecuta el proceso vsftpd.",
      "B. El usuario de Linux propietario del directorio raíz FTP servido por vsftpd.",
      "C. El usuario de Linux con el mismo nombre de usuario que se usó para iniciar sesión anónimamente.",
      "D. El usuario root, pero vsftpd otorga acceso solo a archivos con lectura/escritura global.",
      "E. El usuario de Linux especificado en la opción de configuración 'ftp_username'."
    ],
    "answer": "E",
    "explicacion": "Por defecto, vsftpd usa al usuario 'ftp' definido en la directiva ftp_username para manejar las sesiones anónimas.",
    "pista": "Se define mediante una directiva de configuración específica para el nombre de usuario ftp."
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
    "explicacion": "Para forzar el uso de llaves SSH, se debe desactivar tanto PasswordAuthentication como ChallengeResponseAuthentication (que incluye teclados interactivos).",
    "pista": "Debes desactivar la autenticación por contraseña y la de desafío-respuesta."
  },
  {
    "question": "9. Cuando la política por defecto para la cadena INPUT de netfilter está configurada en DROP, ¿por qué debería existir una regla que permita el tráfico a localhost?",
    "options": [
      "A. Todo el tráfico a localhost debe estar siempre permitido.",
      "B. No importa; netfilter nunca afecta a los paquetes dirigidos a localhost.",
      "C. Algunas aplicaciones utilizan la interfaz localhost para comunicarse con otras aplicaciones.",
      "D. syslogd recibe mensajes en localhost.",
      "E. El comando iptables se comunica con el demonio de gestión netfilterd en localhost."
    ],
    "answer": "C",
    "explicacion": "Muchos servicios internos (como bases de datos o proxies) dependen de la interfaz de loopback (lo) para la comunicación entre procesos locales.",
    "pista": "Comunicación entre servicios del mismo servidor."
  },
  {
    "question": "10. ¿Qué comando crea un par de llaves SSH? (Especifica SOLO el comando sin ruta ni parámetros)",
    "answer": "ssh-keygen",
    "explicacion": "ssh-keygen es la herramienta estándar para generar, gestionar y convertir claves de autenticación para sshd.",
    "pista": "Comando SSH seguido de 'generador de llaves' en inglés."
  }
];
