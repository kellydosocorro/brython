;(function($B){

$B.stdlib = {}
var js=['_ajax','_browser','_html','_jsre','_multiprocessing','_posixsubprocess','_svg','_sys','aes','builtins','dis','hashlib','hmac-md5','hmac-ripemd160','hmac-sha1','hmac-sha224','hmac-sha256','hmac-sha3','hmac-sha384','hmac-sha512','javascript','json','long_int','math','md5','modulefinder','pbkdf2','rabbit','rabbit-legacy','rc4','ripemd160','sha1','sha224','sha256','sha3','sha384','sha512','tripledes']
for(var i=0;i<js.length;i++) $B.stdlib[js[i]]=['js']

var pylist=['VFS_import','_abcoll','_codecs','_collections','_csv','_dummy_thread','_functools','_imp','_io','_markupbase','_random','_socket','_sre','_string','_strptime','_struct','_sysconfigdata','_testcapi','_thread','_threading_local','_warnings','_weakref','_weakrefset','abc','antigravity','atexit','base64','binascii','bisect','browser.ajax','browser.html','browser.indexed_db','browser.local_storage','browser.markdown','browser.object_storage','browser.session_storage','browser.svg','browser.timer','browser.websocket','calendar','codecs','collections.abc','colorsys','configparser','contextlib','copy','copyreg','csv','datetime','decimal','difflib','encodings.cp037','encodings.cp1006','encodings.cp1026','encodings.cp1125','encodings.cp1140','encodings.cp1250','encodings.cp1251','encodings.cp1252','encodings.cp1253','encodings.cp1254','encodings.cp1255','encodings.cp1256','encodings.cp1257','encodings.cp1258','encodings.cp273','encodings.cp424','encodings.cp437','encodings.cp500','encodings.cp720','encodings.cp737','encodings.cp775','encodings.cp850','encodings.cp852','encodings.cp855','encodings.cp856','encodings.cp857','encodings.cp858','encodings.cp860','encodings.cp861','encodings.cp862','encodings.cp863','encodings.cp864','encodings.cp865','encodings.cp866','encodings.cp869','encodings.cp874','encodings.cp875','encodings.hp_roman8','encodings.iso8859_1','encodings.iso8859_10','encodings.iso8859_11','encodings.iso8859_13','encodings.iso8859_14','encodings.iso8859_15','encodings.iso8859_16','encodings.iso8859_2','encodings.iso8859_3','encodings.iso8859_4','encodings.iso8859_5','encodings.iso8859_6','encodings.iso8859_7','encodings.iso8859_8','encodings.iso8859_9','encodings.koi8_r','encodings.koi8_u','encodings.mac_arabic','encodings.mac_centeuro','encodings.mac_croatian','encodings.mac_cyrillic','encodings.mac_farsi','encodings.mac_greek','encodings.mac_iceland','encodings.mac_latin2','encodings.mac_roman','encodings.mac_romanian','encodings.mac_turkish','encodings.palmos','encodings.ptcp154','encodings.tis_620','errno','external_import','fnmatch','formatter','fractions','functools','gc','genericpath','getopt','heapq','html.entities','html.parser','http.cookies','imp','importlib._bootstrap','importlib.abc','importlib.basehook','importlib.machinery','importlib.util','inspect','io','itertools','keyword','linecache','locale','logging.config','logging.handlers','marshal','multiprocessing.dummy.connection','multiprocessing.pool','multiprocessing.process','multiprocessing.util','numbers','opcode','operator','optparse','os','pickle','platform','posix','posixpath','pprint','pwd','pydoc','pydoc_data.topics','queue','random','re','reprlib','select','shutil','signal','site','site-packages.docs','site-packages.header','site-packages.highlight','site-packages.test_sp','site-packages.turtle','socket','sre_compile','sre_constants','sre_parse','stat','string','struct','subprocess','sys','sysconfig','tarfile','tempfile','test.unittests.__main__','test.unittests.audiotests','test.unittests.autotest','test.unittests.bad_coding','test.unittests.bad_coding2','test.unittests.badsyntax_3131','test.unittests.badsyntax_future3','test.unittests.badsyntax_future4','test.unittests.badsyntax_future5','test.unittests.badsyntax_future6','test.unittests.badsyntax_future7','test.unittests.badsyntax_future8','test.unittests.badsyntax_future9','test.unittests.badsyntax_pep3120','test.unittests.buffer_tests','test.unittests.crashers.bogus_code_obj','test.unittests.crashers.gc_inspection','test.unittests.crashers.infinite_loop_re','test.unittests.crashers.mutation_inside_cyclegc','test.unittests.crashers.recursive_call','test.unittests.crashers.trace_at_recursion_limit','test.unittests.crashers.underlying_dict','test.unittests.curses_tests','test.unittests.datetimetester','test.unittests.dis_module','test.unittests.doctest_aliases','test.unittests.double_const','test.unittests.encoded_modules.module_iso_8859_1','test.unittests.encoded_modules.module_koi8_r','test.unittests.fork_wait','test.unittests.future_test1','test.unittests.future_test2','test.unittests.gdb_sample','test.unittests.inspect_fodder','test.unittests.inspect_fodder2','test.unittests.leakers.test_ctypes','test.unittests.leakers.test_gestalt','test.unittests.leakers.test_selftype','test.unittests.list_tests','test.unittests.lock_tests','test.unittests.make_ssl_certs','test.unittests.memory_watchdog','test.unittests.mock_socket','test.unittests.mp_fork_bomb','test.unittests.multibytecodec_support','test.unittests.namespace_pkgs.both_portions.foo.one','test.unittests.namespace_pkgs.both_portions.foo.two','test.unittests.namespace_pkgs.module_and_namespace_package.a_test','test.unittests.namespace_pkgs.not_a_namespace_pkg.foo.one','test.unittests.namespace_pkgs.portion1.foo.one','test.unittests.namespace_pkgs.portion2.foo.two','test.unittests.namespace_pkgs.project1.parent.child.one','test.unittests.namespace_pkgs.project2.parent.child.two','test.unittests.namespace_pkgs.project3.parent.child.three','test.unittests.outstanding_bugs','test.unittests.pickletester','test.unittests.profilee','test.unittests.pyclbr_input','test.unittests.pydoc_mod','test.unittests.pydocfodder','test.unittests.pystone','test.unittests.re_tests','test.unittests.regrtest','test.unittests.relimport','test.unittests.reperf','test.unittests.sample_doctest','test.unittests.sample_doctest_no_docstrings','test.unittests.sample_doctest_no_doctests','test.unittests.script_helper','test.unittests.seq_tests','test.unittests.sortperf','test.unittests.ssl_servers','test.unittests.string_tests','test.unittests.subprocessdata.fd_status','test.unittests.subprocessdata.input_reader','test.unittests.subprocessdata.qcat','test.unittests.subprocessdata.qgrep','test.unittests.subprocessdata.sigchild_ignore','test.unittests.test.mapping_tests','test.unittests.test___all__','test.unittests.test___future__','test.unittests.test__locale','test.unittests.test__osx_support','test.unittests.test_abc','test.unittests.test_abstract_numbers','test.unittests.test_aifc','test.unittests.test_argparse','test.unittests.test_array','test.unittests.test_ast','test.unittests.test_asynchat','test.unittests.test_asyncore','test.unittests.test_atexit','test.unittests.test_audioop','test.unittests.test_augassign','test.unittests.test_base64','test.unittests.test_bigaddrspace','test.unittests.test_bigmem','test.unittests.test_binascii','test.unittests.test_binhex','test.unittests.test_binop','test.unittests.test_bisect','test.unittests.test_bool','test.unittests.test_buffer','test.unittests.test_bufio','test.unittests.test_builtin','test.unittests.test_bytes','test.unittests.test_bz2','test.unittests.test_calendar','test.unittests.test_call','test.unittests.test_capi','test.unittests.test_cgi','test.unittests.test_cgitb','test.unittests.test_charmapcodec','test.unittests.test_class','test.unittests.test_cmath','test.unittests.test_cmd','test.unittests.test_cmd_line','test.unittests.test_cmd_line_script','test.unittests.test_code','test.unittests.test_code_module','test.unittests.test_codeccallbacks','test.unittests.test_codecencodings_cn','test.unittests.test_codecencodings_hk','test.unittests.test_codecencodings_iso2022','test.unittests.test_codecencodings_jp','test.unittests.test_codecencodings_kr','test.unittests.test_codecencodings_tw','test.unittests.test_codecmaps_cn','test.unittests.test_codecmaps_hk','test.unittests.test_codecmaps_jp','test.unittests.test_codecmaps_kr','test.unittests.test_codecmaps_tw','test.unittests.test_codecs','test.unittests.test_codeop','test.unittests.test_coding','test.unittests.test_collections','test.unittests.test_colorsys','test.unittests.test_compare','test.unittests.test_compile','test.unittests.test_compileall','test.unittests.test_complex','test.unittests.test_concurrent_futures','test.unittests.test_configparser','test.unittests.test_contains','test.unittests.test_contextlib','test.unittests.test_copy','test.unittests.test_copyreg','test.unittests.test_cprofile','test.unittests.test_crashers','test.unittests.test_crypt','test.unittests.test_csv','test.unittests.test_ctypes','test.unittests.test_curses','test.unittests.test_datetime','test.unittests.test_dbm','test.unittests.test_dbm_dumb','test.unittests.test_dbm_gnu','test.unittests.test_dbm_ndbm','test.unittests.test_decimal','test.unittests.test_decorators','test.unittests.test_defaultdict','test.unittests.test_deque','test.unittests.test_descr','test.unittests.test_descrtut','test.unittests.test_devpoll','test.unittests.test_dict','test.unittests.test_dictcomps','test.unittests.test_dictviews','test.unittests.test_difflib','test.unittests.test_dis','test.unittests.test_distutils','test.unittests.test_doctest','test.unittests.test_doctest2','test.unittests.test_docxmlrpc','test.unittests.test_dummy_thread','test.unittests.test_dummy_threading','test.unittests.test_dynamic','test.unittests.test_email.__main__','test.unittests.test_email.test__encoded_words','test.unittests.test_email.test__header_value_parser','test.unittests.test_email.test_asian_codecs','test.unittests.test_email.test_defect_handling','test.unittests.test_email.test_email','test.unittests.test_email.test_generator','test.unittests.test_email.test_headerregistry','test.unittests.test_email.test_inversion','test.unittests.test_email.test_message','test.unittests.test_email.test_parser','test.unittests.test_email.test_pickleable','test.unittests.test_email.test_policy','test.unittests.test_email.test_utils','test.unittests.test_email.torture_test','test.unittests.test_enumerate','test.unittests.test_eof','test.unittests.test_epoll','test.unittests.test_errno','test.unittests.test_exception_variations','test.unittests.test_exceptions','test.unittests.test_extcall','test.unittests.test_faulthandler','test.unittests.test_fcntl','test.unittests.test_file','test.unittests.test_file_eintr','test.unittests.test_filecmp','test.unittests.test_fileinput','test.unittests.test_fileio','test.unittests.test_float','test.unittests.test_flufl','test.unittests.test_fnmatch','test.unittests.test_fork1','test.unittests.test_format','test.unittests.test_fractions','test.unittests.test_frozen','test.unittests.test_ftplib','test.unittests.test_funcattrs','test.unittests.test_functools','test.unittests.test_future','test.unittests.test_future3','test.unittests.test_future4','test.unittests.test_future5','test.unittests.test_gc','test.unittests.test_gdb','test.unittests.test_generators','test.unittests.test_genericpath','test.unittests.test_genexps','test.unittests.test_getargs2','test.unittests.test_getopt','test.unittests.test_gettext','test.unittests.test_glob','test.unittests.test_global','test.unittests.test_grammar','test.unittests.test_grp','test.unittests.test_gzip','test.unittests.test_hash','test.unittests.test_hashlib','test.unittests.test_heapq','test.unittests.test_hmac','test.unittests.test_html','test.unittests.test_htmlparser','test.unittests.test_http_cookiejar','test.unittests.test_http_cookies','test.unittests.test_httplib','test.unittests.test_httpservers','test.unittests.test_idle','test.unittests.test_imaplib','test.unittests.test_imp','test.unittests.test_import','test.unittests.test_importhooks','test.unittests.test_importlib.__main__','test.unittests.test_importlib.abc','test.unittests.test_importlib.builtin.test_finder','test.unittests.test_importlib.builtin.test_loader','test.unittests.test_importlib.builtin.util','test.unittests.test_importlib.extension.test_case_sensitivity','test.unittests.test_importlib.extension.test_finder','test.unittests.test_importlib.extension.test_loader','test.unittests.test_importlib.extension.test_path_hook','test.unittests.test_importlib.extension.util','test.unittests.test_importlib.frozen.test_finder','test.unittests.test_importlib.frozen.test_loader','test.unittests.test_importlib.import_.test___package__','test.unittests.test_importlib.import_.test_api','test.unittests.test_importlib.import_.test_caching','test.unittests.test_importlib.import_.test_fromlist','test.unittests.test_importlib.import_.test_meta_path','test.unittests.test_importlib.import_.test_packages','test.unittests.test_importlib.import_.test_path','test.unittests.test_importlib.import_.test_relative_imports','test.unittests.test_importlib.import_.util','test.unittests.test_importlib.regrtest','test.unittests.test_importlib.source.test_abc_loader','test.unittests.test_importlib.source.test_case_sensitivity','test.unittests.test_importlib.source.test_file_loader','test.unittests.test_importlib.source.test_finder','test.unittests.test_importlib.source.test_path_hook','test.unittests.test_importlib.source.test_source_encoding','test.unittests.test_importlib.source.util','test.unittests.test_importlib.test_abc','test.unittests.test_importlib.test_api','test.unittests.test_importlib.test_locks','test.unittests.test_importlib.test_util','test.unittests.test_importlib.util','test.unittests.test_index','test.unittests.test_inspect','test.unittests.test_int','test.unittests.test_int_literal','test.unittests.test_io','test.unittests.test_ioctl','test.unittests.test_ipaddress','test.unittests.test_isinstance','test.unittests.test_iter','test.unittests.test_iterlen','test.unittests.test_itertools','test.unittests.test_json.__main__','test.unittests.test_json.test_decode','test.unittests.test_json.test_default','test.unittests.test_json.test_dump','test.unittests.test_json.test_encode_basestring_ascii','test.unittests.test_json.test_fail','test.unittests.test_json.test_float','test.unittests.test_json.test_indent','test.unittests.test_json.test_pass1','test.unittests.test_json.test_pass2','test.unittests.test_json.test_pass3','test.unittests.test_json.test_recursion','test.unittests.test_json.test_scanstring','test.unittests.test_json.test_separators','test.unittests.test_json.test_speedups','test.unittests.test_json.test_tool','test.unittests.test_json.test_unicode','test.unittests.test_keywordonlyarg','test.unittests.test_kqueue','test.unittests.test_largefile','test.unittests.test_lib2to3','test.unittests.test_linecache','test.unittests.test_list','test.unittests.test_listcomps','test.unittests.test_locale','test.unittests.test_logging','test.unittests.test_long','test.unittests.test_longexp','test.unittests.test_lzma','test.unittests.test_macpath','test.unittests.test_macurl2path','test.unittests.test_mailbox','test.unittests.test_mailcap','test.unittests.test_marshal','test.unittests.test_math','test.unittests.test_memoryio','test.unittests.test_memoryview','test.unittests.test_metaclass','test.unittests.test_mimetypes','test.unittests.test_minidom','test.unittests.test_mmap','test.unittests.test_module','test.unittests.test_modulefinder','test.unittests.test_msilib','test.unittests.test_multibytecodec','test.unittests.test_multiprocessing','test.unittests.test_namespace_pkgs','test.unittests.test_netrc','test.unittests.test_nis','test.unittests.test_nntplib','test.unittests.test_normalization','test.unittests.test_ntpath','test.unittests.test_numeric_tower','test.unittests.test_opcodes','test.unittests.test_openpty','test.unittests.test_operator','test.unittests.test_optparse','test.unittests.test_os','test.unittests.test_ossaudiodev','test.unittests.test_osx_env','test.unittests.test_parser','test.unittests.test_pdb','test.unittests.test_peepholer','test.unittests.test_pep247','test.unittests.test_pep263','test.unittests.test_pep277','test.unittests.test_pep292','test.unittests.test_pep3120','test.unittests.test_pep3131','test.unittests.test_pep3151','test.unittests.test_pep352','test.unittests.test_pep380','test.unittests.test_pickle','test.unittests.test_pickletools','test.unittests.test_pipes','test.unittests.test_pkg','test.unittests.test_pkgimport','test.unittests.test_pkgutil','test.unittests.test_platform','test.unittests.test_plistlib','test.unittests.test_poll','test.unittests.test_popen','test.unittests.test_poplib','test.unittests.test_posix','test.unittests.test_posixpath','test.unittests.test_pow','test.unittests.test_pprint','test.unittests.test_print','test.unittests.test_profile','test.unittests.test_property','test.unittests.test_pstats','test.unittests.test_pty','test.unittests.test_pulldom','test.unittests.test_pwd','test.unittests.test_py_compile','test.unittests.test_pyclbr','test.unittests.test_pydoc','test.unittests.test_pyexpat','test.unittests.test_queue','test.unittests.test_quopri','test.unittests.test_raise','test.unittests.test_random','test.unittests.test_range','test.unittests.test_re','test.unittests.test_readline','test.unittests.test_reprlib','test.unittests.test_resource','test.unittests.test_richcmp','test.unittests.test_rlcompleter','test.unittests.test_robotparser','test.unittests.test_runpy','test.unittests.test_sax','test.unittests.test_sched','test.unittests.test_scope','test.unittests.test_select','test.unittests.test_set','test.unittests.test_setcomps','test.unittests.test_shelve','test.unittests.test_shlex','test.unittests.test_shutil','test.unittests.test_signal','test.unittests.test_site','test.unittests.test_slice','test.unittests.test_smtpd','test.unittests.test_smtplib','test.unittests.test_smtpnet','test.unittests.test_sndhdr','test.unittests.test_socket','test.unittests.test_socketserver','test.unittests.test_sort','test.unittests.test_sqlite','test.unittests.test_ssl','test.unittests.test_startfile','test.unittests.test_stat','test.unittests.test_strftime','test.unittests.test_string','test.unittests.test_stringprep','test.unittests.test_strlit','test.unittests.test_strptime','test.unittests.test_strtod','test.unittests.test_struct','test.unittests.test_structmembers','test.unittests.test_structseq','test.unittests.test_subprocess','test.unittests.test_sunau','test.unittests.test_sundry','test.unittests.test_super','test.unittests.test_support','test.unittests.test_symtable','test.unittests.test_syntax','test.unittests.test_sys','test.unittests.test_sys_setprofile','test.unittests.test_sys_settrace','test.unittests.test_sysconfig','test.unittests.test_syslog','test.unittests.test_tarfile','test.unittests.test_tcl','test.unittests.test_telnetlib','test.unittests.test_tempfile','test.unittests.test_textwrap','test.unittests.test_thread','test.unittests.test_threaded_import','test.unittests.test_threadedtempfile','test.unittests.test_threading','test.unittests.test_threading_local','test.unittests.test_threadsignals','test.unittests.test_time','test.unittests.test_timeit','test.unittests.test_timeout','test.unittests.test_tk','test.unittests.test_tokenize','test.unittests.test_tools','test.unittests.test_trace','test.unittests.test_traceback','test.unittests.test_ttk_guionly','test.unittests.test_ttk_textonly','test.unittests.test_tuple','test.unittests.test_typechecks','test.unittests.test_types','test.unittests.test_ucn','test.unittests.test_unary','test.unittests.test_unicode','test.unittests.test_unicode_file','test.unittests.test_unicodedata','test.unittests.test_unittest','test.unittests.test_univnewlines','test.unittests.test_unpack','test.unittests.test_unpack_ex','test.unittests.test_urllib','test.unittests.test_urllib2','test.unittests.test_urllib2_localnet','test.unittests.test_urllib2net','test.unittests.test_urllib_response','test.unittests.test_urllibnet','test.unittests.test_urlparse','test.unittests.test_userdict','test.unittests.test_userlist','test.unittests.test_userstring','test.unittests.test_uu','test.unittests.test_uuid','test.unittests.test_venv','test.unittests.test_wait3','test.unittests.test_wait4','test.unittests.test_warnings','test.unittests.test_wave','test.unittests.test_weakref','test.unittests.test_weakset','test.unittests.test_webbrowser','test.unittests.test_winreg','test.unittests.test_winsound','test.unittests.test_with','test.unittests.test_wsgiref','test.unittests.test_xdrlib','test.unittests.test_xml_dom_minicompat','test.unittests.test_xml_etree','test.unittests.test_xml_etree_c','test.unittests.test_xmlrpc','test.unittests.test_xmlrpc_net','test.unittests.test_zipfile','test.unittests.test_zipfile64','test.unittests.test_zipimport','test.unittests.test_zipimport_support','test.unittests.test_zlib','test.unittests.testcodec','test.unittests.tf_inherit_check','test.unittests.threaded_import_hangers','test.unittests.time_hashlib','test.unittests.tracedmodules.testmod','test.unittests.warning_tests','test.unittests.win_console_handler','test.unittests.xmltests','textwrap','this','threading','time','timeit','token','tokenize','traceback','types','unittest.__main__','unittest.case','unittest.loader','unittest.main','unittest.mock','unittest.result','unittest.runner','unittest.signals','unittest.suite','unittest.test._test_warnings','unittest.test.dummy','unittest.test.support','unittest.test.test_assertions','unittest.test.test_break','unittest.test.test_case','unittest.test.test_discovery','unittest.test.test_functiontestcase','unittest.test.test_loader','unittest.test.test_program','unittest.test.test_result','unittest.test.test_runner','unittest.test.test_setups','unittest.test.test_skipping','unittest.test.test_suite','unittest.test.testmock.support','unittest.test.testmock.testcallable','unittest.test.testmock.testhelpers','unittest.test.testmock.testmagicmethods','unittest.test.testmock.testmock','unittest.test.testmock.testpatch','unittest.test.testmock.testsentinel','unittest.test.testmock.testwith','unittest.util','urllib.parse','urllib.request','uuid','warnings','weakref','webbrowser','xml.dom.NodeFilter','xml.dom.domreg','xml.dom.expatbuilder','xml.dom.minicompat','xml.dom.minidom','xml.dom.pulldom','xml.dom.xmlbuilder','xml.etree.ElementInclude','xml.etree.ElementPath','xml.etree.ElementTree','xml.etree.cElementTree','xml.parsers.expat','xml.sax._exceptions','xml.sax.expatreader','xml.sax.handler','xml.sax.saxutils','xml.sax.xmlreader','zipfile','zlib']
for(var i=0;i<pylist.length;i++) $B.stdlib[pylist[i]]=['py']

var pkglist=['browser','collections','encodings','html','http','importlib','jqueryui','logging','long_int1','multiprocessing','multiprocessing.dummy','pydoc_data','test.unittests','test.unittests.encoded_modules','test.unittests.leakers','test.unittests.namespace_pkgs.not_a_namespace_pkg.foo','test.unittests.test_email','test.unittests.test_importlib','test.unittests.test_importlib.builtin','test.unittests.test_importlib.extension','test.unittests.test_importlib.frozen','test.unittests.test_importlib.import_','test.unittests.test_importlib.source','test.unittests.test_json','test.unittests.tracedmodules','unittest','unittest.test','unittest.test.testmock','urllib','xml','xml.dom','xml.etree','xml.parsers','xml.sax']
for(var i=0;i<pkglist.length;i++) $B.stdlib[pkglist[i]]=['py',true]
})(__BRYTHON__)