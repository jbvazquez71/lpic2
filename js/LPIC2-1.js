const preguntasLPIC2_1 = [
  {
    "question": "1. ¿Cuál de los siguientes comandos borra el contenido de la partición /dev/sdb3?",
    "options": [
      "A. rm /dev/sdb3",
      "B. dd if=/dev/zero of=/dev/sdb3",
      "C. dd of=/dev/zero if=/dev/sdb3",
      "D. umount /dev/sdb3"
    ],
    "answer": "B",
    "explicacion": "Escribir desde /dev/zero hacia la partición sobrescribe todos los datos con ceros.",
    "pista": "Piensa en el comando 'dd' y el origen de datos nulos."
  },
  {
    "question": "2. ¿Qué archivos buscará y utilizará GNU make, si existen, a menos que se especifique un archivo diferente? (Elige dos)",
    "options": [
      "A. configure",
      "B. config.h.in",
      "C. makefile",
      "D. Makefile",
      "E. Makefile.in"
    ],
    "answer": "C, D",
    "explicacion": "GNU make busca por defecto archivos con estos nombres en el directorio actual.",
    "pista": "Nombres estándar del archivo de instrucciones para 'make'."
  },
  {
    "question": "3. ¿Qué comando se utiliza para enviar mensajes a todos los usuarios con sesión iniciada? (Solo el comando)",
    "options": [],
    "answer": "wall",
    "explicacion": "El comando 'wall' (write all) envía una notificación a todas las terminales abiertas.",
    "pista": "Abreviatura de 'Write ALL'."
  },
  {
    "question": "4. ¿Qué comando restaura solo los archivos que contienen 'lpi' en su nombre desde lpifiles.tar.gz?",
    "options": [
      "A. tar xvzf lpifiles.tar.gz --wildcards '*lpi*'",
      "B. tar xvzwf lpifiles.tar.gz *lpi*",
      "C. tar -xvfz lpifiles.tar.gz --deep *lpi*",
      "D. tar -xvzf lpifiles.tar.gz --subdirs '*lpi*'",
      "E. tar xvzf lpifiles.tar.gz --globbing *lpi*"
    ],
    "answer": "A",
    "explicacion": "La opción '--wildcards' permite filtrar por patrones dentro del archivo comprimido.",
    "pista": "Uso de asteriscos para búsqueda de patrones."
  },
  {
    "question": "5. La instalación mediante './configure && make && make install' falla para un usuario regular. ¿Qué se puede hacer? (Elige dos)",
    "options": [
      "A. Instalar manualmente con suinstall",
      "B. Ejecutar make install con privilegios de root",
      "C. Omitir ./configure",
      "D. Reejecutar ./configure con la opción --prefix",
      "E. Ejecutar make install_local"
    ],
    "answer": "B, D",
    "explicacion": "Las fallas suelen ser por falta de permisos en /usr/ o rutas protegidas.",
    "pista": "Permisos de superusuario o cambio de ruta de destino."
  },
  {
    "question": "6. Tras ejecutar 'cd /opt; tar xvf /dev/nst0;', ¿qué ocurre si se ejecuta de nuevo?",
    "options": [
      "A. Error por cinta expulsada",
      "B. Se restaura lo mismo",
      "C. Se reemplaza con el siguiente archivo de la cinta",
      "D. Se añade contenido desde el siguiente archivo de la cinta"
    ],
    "answer": "D",
    "explicacion": "El dispositivo 'nst0' no rebobina la cinta, quedando al inicio del siguiente archivo.",
    "pista": "La 'n' en nst0 significa 'no-rewind'."
  },
  {
    "question": "7. ¿Qué comando descarta bloques no usados en un sistema montado para soportar SSD? (Solo el comando)",
    "options": [],
    "answer": "fstrim",
    "explicacion": "Se utiliza para realizar la operación TRIM en sistemas de archivos montados.",
    "pista": "Comando para optimizar SSDs."
  },
  {
    "question": "8. ¿Qué comando simula un fallo de dispositivo en un RAID 5?",
    "options": [
      "A. mdadm --remove /dev/md0 /dev/sdd1",
      "B. mdadm --zero-superblock /dev/sdf3",
      "C. mdadm --force-fault /dev/md2 /dev/sde2",
      "D. mdadm --fail /dev/md0 /dev/sdc1",
      "E. mdadm /dev/md0 --offline /dev/sdc1"
    ],
    "answer": "D",
    "explicacion": "La opción '--fail' marca el componente como defectuoso en la matriz.",
    "pista": "Literalmente 'fallar' el disco."
  },
  {
    "question": "9. ¿Mínimo de discos para un RAID 5 totalmente redundante?",
    "options": [
      "A. 1", "B. 2", "C. 3", "D. 4", "E. 5"
    ],
    "answer": "C",
    "explicacion": "Se requieren al menos 3 discos para distribuir datos y paridad.",
    "pista": "Número impar mínimo mayor que 1."
  },
  {
    "question": "10. ¿Qué dispositivo representa una grabadora de CD SATA?",
    "options": [
      "A. /dev/hdb", "B. /dev/sdd", "C. /dev/scdl", "D. /dev/sr0", "E. /dev/sr1"
    ],
    "answer": "D",
    "explicacion": "En sistemas modernos, los dispositivos ópticos SCSI/SATA son /dev/srX.",
    "pista": "Standard Read-only (aunque grabe)."
  },
  {
    "question": "11. ¿Qué acción sigue al aumentar el tamaño de un volumen lógico?",
    "options": [
      "A. Ejecutar vgresize",
      "B. Aumentar el sistema de archivos del volumen",
      "C. Ejecutar lvresize",
      "D. Remontar el volumen"
    ],
    "answer": "B",
    "explicacion": "Ampliar el LV no amplía automáticamente los datos que contiene.",
    "pista": "El contenedor creció, ahora falta el contenido."
  },
  {
    "question": "12. Según /proc/mdstat, ¿qué es correcto? (Elige dos)\nmd0: active raid5 sdb1[3](S)... [UU]",
    "options": [
      "A. Un disco falló y se usa un spare",
      "B. /dev/sda1 restaura la redundancia",
      "C. [UU] indica que falta un disco",
      "D. Usa metadatos 1.2 para LILO",
      "E. [3/2] indica 3 discos y 2 spares"
    ],
    "answer": "A, B",
    "explicacion": "El RAID tuvo un fallo de disco, entró el spare automáticamente y ahora la redundancia está restaurada, por eso aparece (S) y [UU]..",
    "pista": ""
  },
  {
    "question": "13. ¿Comando para eliminar un PV de un VG? (Solo el comando)",
    "options": [],
    "answer": "vgreduce",
    "explicacion": "Se utiliza para reducir un grupo de volúmenes eliminando discos físicos.",
    "pista": "Reducir el Volume Group."
  },
  {
    "question": "14. ¿Qué comando hace una copia exacta (snapshot) de un volumen lógico?",
    "options": [
      "A. lvcclone", "B. lvcreate", "C. 1vm2", "D. lvsnap", "E. lvsnapshot"
    ],
    "answer": "B",
    "explicacion": "Se usa 'lvcreate' con la opción '-s' para crear instantáneas.",
    "pista": "Mismo comando usado para crear volúmenes normales."
  },
  {
    "question": "15. ¿Comando para crear un subvolumen Btrfs llamado 'volume' en /mnt?",
    "options": [
      "A. btrfs subvolume add",
      "B. btrfs create subvolume",
      "C. btrfs-subvolume create",
      "D. btrfs subvolume new",
      "E. btrfs subvolume create /mnt/volume"
    ],
    "answer": "E",
    "explicacion": "Sintaxis estándar: btrfs subvolume create [ruta].",
    "pista": "Estructura jerárquica de comandos btrfs."
  },
  {
    "question": "16. Opción en fstab para dar acceso de escritura a 'fred' en vfat: (Solo el nombre)",
    "options": [],
    "answer": "uid",
    "explicacion": "vfat no tiene permisos Linux nativos; uid asigna el dueño al montar.",
    "pista": "User ID."
  },
  {
    "question": "17. Para inicializar 5 GB de swap adicional, ¿qué combinación usar?",
    "options": [
      "A. dd...; mkswap...; mount...",
      "B. dd...",
      "C. dd...; mkswap...; swapon...",
      "D. touch...; swapon...",
      "E. mkswap..."
    ],
    "answer": "C",
    "explicacion": "Requiere crear el archivo, formatearlo como swap y activarlo.",
    "pista": "dd, mkswap y swapon."
  },
  {
    "question": "18. ¿Cuál es el propósito de una unidad de montaje (.mount) de systemd?",
    "options": [
      "A. Usada por systemd-mount para puntos elegidos por el usuario",
      "B. Solo para sistemas de red",
      "C. Creada por fstab-generator para el arranque",
      "D. Usada por el comando mount tradicional"
    ],
    "answer": "C",
    "explicacion": "Representar los montajes definidos en fstab durante el arranque.",
    "pista": "Integración de montajes en el gestor de servicios."
  },
  {
    "question": "19. ¿Comando para asegurar que los buffers se escriban al disco? (Solo el comando)",
    "options": [],
    "answer": "sync",
    "explicacion": "Vuelca los datos pendientes en memoria RAM hacia los discos físicos.",
    "pista": "Sincronizar."
  },
  {
    "question": "20. ¿Qué componente monitoriza smartd?",
    "options": [
      "A. CPU", "B. RAM", "C. Discos duros", "D. Red"
    ],
    "answer": "C",
    "explicacion": "Monitoriza los datos S.M.A.R.T. de unidades de almacenamiento.",
    "pista": "Salud del disco."
  },
  {
    "question": "21. ¿Cómo añadir la etiqueta 'root' a un ext4 en /dev/sda1?",
    "options": [
      "A. relabel",
      "B. tune2fs -L root /dev/sda1",
      "C. echo root > /proc/fs/...",
      "D. labelfs"
    ],
    "answer": "B",
    "explicacion": "tune2fs modifica parámetros de sistemas ext2/3/4, incluyendo la etiqueta con -L.",
    "pista": "Herramienta para 'tunear' sistemas de archivos."
  },
  {
    "question": "22. ¿Subcomando de cryptsetup para ver info de una partición LUKS?",
    "options": [
      "A. luksDump", "B. luksInfo", "C. luks Debug", "D. luksLS", "E. luksShow"
    ],
    "answer": "A",
    "explicacion": "Muestra el volcado (dump) del encabezado y ranuras de llaves.",
    "pista": "Volcado de información."
  },
  {
    "question": "23. ¿Estándar de sistema de archivos para CD-ROM?",
    "options": [
      "A. OSI 9660", "B. ISO 9660", "C. SROFS", "D. ISO 8859", "E. ROM-EO"
    ],
    "answer": "B",
    "explicacion": "ISO 9660 es el estándar universal para datos en discos ópticos.",
    "pista": "Estándar ISO."
  },
  {
    "question": "24. ¿Qué sistema de init incluye su propio cargador de arranque UEFI?",
    "options": [
      "A. systemd", "B. SysVinit", "C. Upstart", "D. OpenRC", "E. launchd"
    ],
    "answer": "A",
    "explicacion": "systemd incluye 'systemd-boot'.",
    "pista": "El init más completo y controvertido."
  },
  {
    "question": "25. ¿Qué hace la opción -f en update-rc.d?",
    "options": [
      "A. Borra symlinks si son RO",
      "B. Borra script y links",
      "C. Actualiza info de paquete",
      "D. Fuerza borrado de links aunque el script exista"
    ],
    "answer": "D",
    "explicacion": "Fuerza la desvinculación de los niveles de ejecución.",
    "pista": "Force removal."
  },
  {
    "question": "26. ¿Comando para instalar GRUB en el MBR?",
    "options": [
      "A. grub-install", "B. grub-mkconfig", "C. grub-install-mbr", "D. grub-glue-mbr", "E. grub-mbr-setup"
    ],
    "answer": "A",
    "explicacion": "Comando principal para instalar la imagen de GRUB en el sector de arranque.",
    "pista": "Instalador de GRUB."
  },
  {
    "question": "27. Si se borra el archivo del kernel, ¿qué pasa al arrancar?",
    "options": [
      "A. Arranca normal",
      "B. Carga initramfs para reinstalar",
      "C. Lanza /bin/sh",
      "D. El sistema no arranca y da error"
    ],
    "answer": "D",
    "explicacion": "Sin kernel no hay nada que cargar en memoria tras el bootloader.",
    "pista": "Falta el núcleo del sistema."
  },
  {
    "question": "28. ¿Directorio con archivos de unidad systemd del sistema? (Ruta completa)",
    "options": [],
    "answer": "/lib/systemd/system",
    "explicacion": "Ubicación estándar para unidades instaladas por el sistema.",
    "pista": "Ubicación en /lib."
  },
  {
    "question": "29. Un servidor systemd entró en rescue.target. ¿Cómo volver al estado normal? (Elige dos)",
    "options": [
      "A. telinit 0",
      "B. systemctl default",
      "C. sync",
      "D. systemctl emergency",
      "E. systemctl reboot"
    ],
    "answer": "B, E",
    "explicacion": "systemctl default carga el target predeterminado.",
    "pista": "Volver al 'default'."
  },
  {
    "question": "30. Archivo de configuración principal de SysV init: (Ruta completa)",
    "options": [],
    "answer": "/etc/inittab",
    "explicacion": "Define niveles de ejecución y procesos iniciales en SysV.",
    "pista": "init-table."
  },
  {
    "question": "31. ¿Propósito de initramfs en el arranque?",
    "options": [
      "A. Carga módulos para hacer accesible la raíz",
      "B. Mueve kernel a RAM",
      "C. Copia raíz a RAM",
      "D. Crea ramdisk para /tmp"
    ],
    "answer": "A",
    "explicacion": "Monta temporalmente una raíz en RAM para cargar drivers de disco y LVM.",
    "pista": "Puente hacia el disco real."
  },
  {
    "question": "32. Aplicación para modificar entradas EFI en Linux:",
    "options": [
      "A. efieditor", "B. configefi", "C. efimanager", "D. efibootmgr", "E. efibootedit"
    ],
    "answer": "D",
    "explicacion": "Permite gestionar el orden y contenido de la NVRAM UEFI.",
    "pista": "EFI boot manager."
  },
  {
    "question": "33. ¿Qué árbol de directorios modifica sysctl?",
    "options": [
      "A. /sys/kernel/", "B. /proc/kernel/", "C. /proc/sys/", "D. /lib/sys/", "E. /sys/proc/"
    ],
    "answer": "C",
    "explicacion": "Intervención en parámetros del kernel en tiempo de ejecución.",
    "pista": "Sistema bajo /proc."
  },
  {
    "question": "34. ¿Qué hace 'udevadm monitor'?",
    "options": [
      "A. Imprime eventos del kernel producidos por udev",
      "B. Monitoriza /dev/",
      "C. Monitoriza rendimiento de udev",
      "D. Usa D-Bus para dispositivos"
    ],
    "answer": "A",
    "explicacion": "Muestra los eventos que el kernel envía al demonio udev.",
    "pista": "Escuchar eventos de hardware."
  },
  {
    "question": "35. ¿Cómo se distribuye el código de los módulos principales del kernel?",
    "options": [
      "A. Incluido en las fuentes del kernel",
      "B. Descarga bajo demanda",
      "C. Ciclo separado",
      "D. Descarga separada"
    ],
    "answer": "A",
    "explicacion": "Los módulos estándar están integrados en el código base del kernel Linux.",
    "pista": "Todo en uno."
  },
  {
    "question": "36. Tras descargar patch-4.6.4.xz, ¿qué pasos siguen? (Elige dos)",
    "options": [
      "A. Mover a /usr/src/linux",
      "B. Aplicar a 4.6.0",
      "C. Aplicar a 4.6.3",
      "D. Descomprimir con xz",
      "E. Aplicar a cualquier versión anterior"
    ],
    "answer": "C, D",
    "explicacion": "Se trata de un parche incremental que se extrae primero y luego se aplica a la versión inmediatamente anterior.",
    "pista": "Extraer y parchear."
  },
  {
    "question": "37. Tras compilar un kernel, ¿qué pasa con el initramfs?",
    "options": [
      "A. Independiente",
      "B. Debe construirse uno nuevo",
      "C. Se crea automáticamente, solo hay que instalarlo",
      "D. Se reconfigura solo"
    ],
    "answer": "B",
    "explicacion": "Cuando compilas e instalas un kernel nuevo, debes generar un initramfs nuevo para ese kernel.",
    "pista": "Viene con la compilación."
  },
  {
    "question": "38. ¿Comando para ver la ruta física del módulo 'dummy'?",
    "options": [
      "A. modprobe i dummy", 
	  "B. modinfo -n dummy", 
	  "C. modpath -v dummy", 
	  "D. depmod -n dummy", 
	  "E. modshow -p dummy"
    ],
    "answer": "B",
    "explicacion": "a opción -n (o --filename) muestra la ruta exacta del fichero .ko en el sistema.",
    "pista": "Comando para cargar módulos con opción de info."
  },
  {
    "question": "39. Parámetro de arranque para usar solo un procesador:",
    "options": [
      "A. maxcpus=1", "B. usecpus=1", "C. smpcpus=1", "D. vcpumx=1", "E. vmxcpus=1"
    ],
    "answer": "A",
    "explicacion": "Limita el número de CPUs activas desde el boot.",
    "pista": "Max CPUs."
  },
  {
    "question": "40. Tras instalar un kernel, no se hallan los módulos. ¿Qué target de make faltó? (Solo el nombre)",
    "options": [],
    "answer": "modules_install",
    "explicacion": "Copia los módulos al directorio /lib/modules correspondiente.",
    "pista": "Instalar los módulos."
  },
  {
    "question": "41. En /boot, ¿qué archivo contiene los parámetros de configuración del kernel?",
    "options": [
      "A. config-linux...", "B. config-3.4.50-11", "C. system...", "D. vmlinuz...", "E. rc.config..."
    ],
    "answer": "B",
    "explicacion": "Copia del archivo .config usado durante la compilación.",
    "pista": "Empieza por config."
  },
  {
    "question": "42. Comando que ordena procesos por uso de CPU por defecto:",
    "options": [
      "A. top", "B. uptime", "C. ps aux", "D. vmstat", "E. freemem"
    ],
    "answer": "A",
    "explicacion": "Muestra dinámicamente los procesos que más consumen recursos.",
    "pista": "La cima."
  },
  {
    "question": "43. En sar -b, ¿qué es tps?",
    "options": [
      "A. Terabytes/s", "B. Tráfico/s", "C. Transferencias/s", "D. Total data/s", "E. Terabits/s"
    ],
    "answer": "C",
    "explicacion": "Transfers Per Second (operaciones de I/O por segundo).",
    "pista": "Transferencias."
  },
  {
    "question": "44. En uptime, ¿qué tiempos representan los promedios de carga?",
    "options": [
      "A. 1, 5 y 15 min", "B. 1, 15 y 30 min", "C. 5, 20 y 25 seg", "D. 15, 30 y 60 min", "E. 15, 45 y 90 seg"
    ],
    "answer": "A",
    "explicacion": "Carga media en el último minuto, últimos 5 y últimos 15.",
    "pista": "1, 5, 15."
  },
  {
    "question": "45. Propiedades para monitorizar calidad de enlace: (Elige dos)",
    "options": [
      "A. Ancho de banda",
      "B. Nodos usando el enlace",
      "C. Latencia efectiva",
      "D. Paquetes v4/v6",
      "E. Puertos TCP"
    ],
    "answer": "A, C",
    "explicacion": "La velocidad y el retraso definen la calidad de la conexión.",
    "pista": "Caudal y retardo."
  },
  {
    "question": "46. Comando para memoria, paginación y E/S de bloques:",
    "options": [
      "A. free", "B. memshow", "C. lsof", "D. pidof", "E. vmstat"
    ],
    "answer": "E",
    "explicacion": "Estadísticas de memoria virtual, incluyendo swap e I/O.",
    "pista": "Virtual Memory Statistics."
  },
  {
    "question": "47. Para recoger datos de sar por largo tiempo, ¿qué ejecutar con cron?",
    "options": [
      "A. sa1", "B. sarmon", "C. sarec", "D. sadf", "E. sarcron"
    ],
    "answer": "A",
    "explicacion": "Script recolector binario del paquete sysstat.",
    "pista": "System Activity 1."
  },
  {
    "question": "48. Comandos para datos de FS remotos: (Elige dos)",
    "options": [
      "A. pidstat", "B. nfsiostat", "C. sadf", "D. cifsiostat", "E. fsiostat"
    ],
    "answer": "B, D",
    "explicacion": "Monitorización de tráfico NFS y CIFS/SMB.",
    "pista": "Busca los protocolos de red."
  },
  {
    "question": "49. Crecimiento del 20%, RAM al 75%, swap sin uso. ¿Qué hacer? (Elige dos)",
    "options": [
      "A. Esperar a usar swap",
      "B. RAID 1 en swap",
      "C. Servidor adicional",
      "D. Scripts en ramdisk",
      "E. Aumentar RAM"
    ],
    "answer": "C, E",
    "explicacion": "Escalabilidad ante el crecimiento previsto de carga.",
    "pista": "Más recursos o más nodos."
  },
  {
    "question": "50. Archivos usados por tcpwrapper:",
    "options": [
      "A. tcpd.allow/deny",
      "B. tcpwrapper.allow/deny",
      "C. hosts.allow/deny",
      "D. access.allow/deny",
      "E. service.allow/deny"
    ],
    "answer": "C",
    "explicacion": "Control de acceso basado en host en /etc.",
    "pista": "Hosts."
  },
  {
    "question": "51. Programa que lista archivos y conexiones abiertas: (Solo el comando)",
    "options": [],
    "answer": "lsof",
    "explicacion": "List Open Files.",
    "pista": "lsof."
  },
  {
    "question": "52. Activar router 192.168.0.1 como gateway: (Elige dos)",
    "options": [
      "A. route add default gw 192.168.0.1 eth0",
      "B. ifconfig eth0 defaultroute",
      "C. ip route add default via 192.168.0.1",
      "D. echo en resolv.conf",
      "E. route add defaultgw="
    ],
    "answer": "A, C",
    "explicacion": "Sintaxis de los comandos route e ip.",
    "pista": "Comandos route e ip."
  },
  {
    "question": "53. Comando que muestra el tiempo de resolución DNS: (Solo el comando)",
    "options": [],
    "answer": "dig",
    "explicacion": "Muestra el Query Time en milisegundos.",
    "pista": "Domain Information Groper."
  },
  {
    "question": "54. Keywords para filtros en tcpdump: (Elige tres)",
    "options": [
      "A. host", "B. ip", "C. src", "D. dst", "E. ipv6"
    ],
    "answer": "A, C, D",
    "explicacion": "Filtros de dirección, origen y destino.",
    "pista": "Direccionamiento."
  },
  {
    "question": "55. Añadir IPv6 estática a eth0:",
    "options": [
      "A. ip add addr",
      "B. ip 6 add addr",
      "C. ip addr add",
      "D. ip 6 addr add new 2001:db8::1337/64 dev eth0",
      "E. ip addr add 6"
    ],
    "answer": "D",
    "explicacion": "Uso del comando ip para direccionamiento v6.",
    "pista": "ip 6."
  },
  {
    "question": "56. Con varias rutas por defecto, ¿cuál se prefiere?",
    "options": [
      "A. Métrica más alta",
      "B. MTU más alto",
      "C. TTL bajo",
      "D. TTL alto",
      "E. Métrica más baja"
    ],
    "answer": "E",
    "explicacion": "La métrica más baja indica el camino más 'corto' o preferido.",
    "pista": "Menor costo."
  },
  {
    "question": "57. En tcpdump, tráfico hacia puerto 21 indica:",
    "options": [
      "A. FTP", "B. HTTP", "C. SSH", "D. DNS", "E. DHCP"
    ],
    "answer": "A",
    "explicacion": "Puerto estándar de control para FTP.",
    "pista": "Puerto 21."
  },
  {
    "question": "58. Asegurar uso de DNS 192.168.0.1: (Elige dos)",
    "options": [
      "A. nameserver en /etc/resolv.conf",
      "B. route add nameserver",
      "C. ifconfig nameserver",
      "D. dns en hosts en /etc/nsswitch.conf",
      "E. bind add"
    ],
    "answer": "A, D",
    "explicacion": "Configura el servidor y el orden de búsqueda.",
    "pista": "resolv y nsswitch."
  },
  {
    "question": "59. Ver capacidades y frecuencias de wlan0:",
    "options": [
      "A. iw phy phy0 info",
      "B. iw dev wlan0 info",
      "C. iw dev wlan0 show",
      "D. iw phy wlan0 show",
      "E. iw phy0 show"
    ],
    "answer": "B",
    "explicacion": "Para ver capacidades y frecuencias de una interfaz concreta como wlan0 se usa iw dev wlan0 info, porque dev trabaja a nivel de interfaz.",
    "pista": "iw dev."
  },
  {
    "question": "60. Listar IPs v4 y MACs vistas por el sistema:",
    "options": [
      "A. arp", "B. ifconfig", "C. ipadm", "D. iwlist"
    ],
    "answer": "A",
    "explicacion": "Muestra la tabla de resolución de direcciones (ARP cache).",
    "pista": "Protocolo ARP."
  }
];