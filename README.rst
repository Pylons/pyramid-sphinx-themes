pyramid-sphinx-themes
=====================

Pyramid Sphinx themes for related projects.


Requirements
------------

You will need the following for hacking on this project:

- `Python <https://www.python.org/downloads/>`_
- `Virtualenv <http://virtualenv.readthedocs.org/en/latest/virtualenv.html#installation>`_
- `NodeJS with npm <http://nodejs.org/download/>`_


Installing
----------

Assuming you have all the recommended tools listed above installed:


1. Clone the project
++++++++++++++++++++
::

    $ git clone https://github.com/Pylons/pyramid-sphinx-themes.git
    $ cd pyramid-sphinx-themes


2. Create and initialize a virtualenv
+++++++++++++++++++++++++++++++++++++
::

    # for Python 2
    $ virtualenv .
    # for Python 3
    $ pyvenv --upgrade .


3. Install requirements
+++++++++++++++++++++++

Install the project in editable mode:

::

    $ bin/pip install -e .


4. Install frontend tools
+++++++++++++++++++++++++
::

    $ npm install -D


Working with frontend tools
---------------------------

If you are in development mode, and need hot reload and compiling of assets
run:

::
    $ npm run dev

View the local site in a browser at http://localhost:8080/

If you just want to output a build run:

::
    $ npm run build

If you want a new dist optimized for production run:

::
    $ npm run dist


Building your docs
------------------

Make edits in your project `docs/conf.py` as follows:

1. Add the `pyramid_sphinx_themes` Sphinx extension module name
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
::

    # Add any Sphinx extension module names here, as strings. They can be
    # extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
    # ones.
    extensions = [
        'sphinx.ext.autodoc',
        'sphinx.ext.intersphinx',
        'sphinx.ext.viewcode',
        'pyramid_sphinx_themes'
        ]

2. Modify the section "Options for HTML output"
+++++++++++++++++++++++++++++++++++++++++++++++
::

    # -- Options for HTML output ---------------------------------------------------

    from pyramid_sphinx_themes import get_html_themes_path

    # The theme to use for HTML and HTML Help pages.  See the documentation for
    # a list of builtin themes.
    html_theme = 'pyramid_sphinx_themes'

    # Theme options are theme-specific and customize the look and feel of a theme
    # further.  For a list of options available for each theme, see the
    # documentation.
    #html_theme_options = {}

    # Add any paths that contain custom themes here, relative to this directory.
    html_theme_path = get_html_themes_path()


3. Set (or wherever it gets set in the package)
+++++++++++++++++++++++++++++++++++++++++++++++
::

    html_use_smartypants = False

Save `docs/conf.py`.


4. Run `sphinx-build`
+++++++++++++++++++++

While your current directory is `docs/`, run the command:
::

    make clean html SPHINXBUILD=../bin/sphinx-build

