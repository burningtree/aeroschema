COFFEEC = coffee
SCHEMA = $(SRC:src/%.coffee=lib/%.js)

%.js: %.coffee
  $(COFFEEC) -bc $<

all: scripts
