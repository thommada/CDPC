PGDMP     #                     x            cdpc_db    12.2    12.2     "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            %           1262    37333    cdpc_db    DATABASE     �   CREATE DATABASE cdpc_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE cdpc_db;
                postgres    false            �            1259    45532    experimentos_seq    SEQUENCE     }   CREATE SEQUENCE public.experimentos_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1;
 '   DROP SEQUENCE public.experimentos_seq;
       public          postgres    false            �            1259    37367    experimentos    TABLE     6  CREATE TABLE public.experimentos (
    id bigint DEFAULT nextval('public.experimentos_seq'::regclass) NOT NULL,
    nome character varying(30) NOT NULL,
    objetivo character varying(30) NOT NULL,
    detalhes character varying(30),
    imagens character varying(30),
    capacitacao character varying(30)
);
     DROP TABLE public.experimentos;
       public         heap    postgres    false    207            �            1259    37361    instituicoes_seq    SEQUENCE     }   CREATE SEQUENCE public.instituicoes_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1;
 '   DROP SEQUENCE public.instituicoes_seq;
       public          postgres    false            �            1259    37351    instituicoes    TABLE     q  CREATE TABLE public.instituicoes (
    id bigint DEFAULT nextval('public.instituicoes_seq'::regclass) NOT NULL,
    nome character varying(30) NOT NULL,
    endereco character varying(30) NOT NULL,
    bairro character varying(30) NOT NULL,
    complemento character varying(30),
    numero character varying(5) NOT NULL,
    telefone character varying(11) NOT NULL
);
     DROP TABLE public.instituicoes;
       public         heap    postgres    false    204            �            1259    45527    usuarios_seq    SEQUENCE     y   CREATE SEQUENCE public.usuarios_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1;
 #   DROP SEQUENCE public.usuarios_seq;
       public          postgres    false            �            1259    37334    usuarios    TABLE     X  CREATE TABLE public.usuarios (
    id bigint DEFAULT nextval('public.usuarios_seq'::regclass) NOT NULL,
    nome character varying(50) NOT NULL,
    cpf character varying(11) NOT NULL,
    email character varying(50) NOT NULL,
    senha character varying(100) NOT NULL,
    telefone character varying(11),
    instituicao_id bigint NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false    206                      0    37367    experimentos 
   TABLE DATA           Z   COPY public.experimentos (id, nome, objetivo, detalhes, imagens, capacitacao) FROM stdin;
    public          postgres    false    205   s                 0    37351    instituicoes 
   TABLE DATA           a   COPY public.instituicoes (id, nome, endereco, bairro, complemento, numero, telefone) FROM stdin;
    public          postgres    false    203   �                 0    37334    usuarios 
   TABLE DATA           Y   COPY public.usuarios (id, nome, cpf, email, senha, telefone, instituicao_id) FROM stdin;
    public          postgres    false    202   �       &           0    0    experimentos_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.experimentos_seq', 1, false);
          public          postgres    false    207            '           0    0    instituicoes_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.instituicoes_seq', 1, false);
          public          postgres    false    204            (           0    0    usuarios_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.usuarios_seq', 1, true);
          public          postgres    false    206            �
           2606    37371    experimentos experimentos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.experimentos
    ADD CONSTRAINT experimentos_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.experimentos DROP CONSTRAINT experimentos_pkey;
       public            postgres    false    205            �
           2606    45526 $   instituicoes primarykey_instituicoes 
   CONSTRAINT     b   ALTER TABLE ONLY public.instituicoes
    ADD CONSTRAINT primarykey_instituicoes PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.instituicoes DROP CONSTRAINT primarykey_instituicoes;
       public            postgres    false    203            �
           2606    37341    usuarios primarykey_usuarios 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT primarykey_usuarios PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT primarykey_usuarios;
       public            postgres    false    202            �
           2606    45535     experimentos unique_experimentos 
   CONSTRAINT     Y   ALTER TABLE ONLY public.experimentos
    ADD CONSTRAINT unique_experimentos UNIQUE (id);
 J   ALTER TABLE ONLY public.experimentos DROP CONSTRAINT unique_experimentos;
       public            postgres    false    205            �
           2606    37360     instituicoes unique_instituicoes 
   CONSTRAINT     Y   ALTER TABLE ONLY public.instituicoes
    ADD CONSTRAINT unique_instituicoes UNIQUE (id);
 J   ALTER TABLE ONLY public.instituicoes DROP CONSTRAINT unique_instituicoes;
       public            postgres    false    203            �
           2606    45531    usuarios unique_usuarios 
   CONSTRAINT     Q   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT unique_usuarios UNIQUE (id);
 B   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT unique_usuarios;
       public            postgres    false    202            �
           1259    45542    fki_foreignkey_instituicoes    INDEX     Z   CREATE INDEX fki_foreignkey_instituicoes ON public.usuarios USING btree (instituicao_id);
 /   DROP INDEX public.fki_foreignkey_instituicoes;
       public            postgres    false    202            �
           2606    45553     usuarios foreignkey_instituicoes    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT foreignkey_instituicoes FOREIGN KEY (instituicao_id) REFERENCES public.instituicoes(id);
 J   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT foreignkey_instituicoes;
       public          postgres    false    202    2710    203                  x������ � �            x������ � �            x������ � �     