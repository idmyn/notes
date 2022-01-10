---
title: Elm Blank Canvas
---

# Steps to get started with a new "blank canvas" Elm project

See also: [create-elm-app](https://github.com/halfzebra/create-elm-app) if you
want all the bells and whistles (webpack, babel, etc.)

1. `mkdir new-project; cd new-project`
2. `elm init` (answer 'y' to get an `elm.json` file)
3. `cd src; touch Main.elm`
4. `elm reactor` (and visit localhost:8000)

Paste the following content into `Main.elm` and start hacking away!

``` Elm
module Main exposing (..)

import Browser
import Html exposing (Html, div, h1, text)



-- MAIN


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    {}


init : Model
init =
    {}



-- UPDATE


type Msg
    = NoOp


update : Msg -> Model -> Model
update msg model =
    model



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "Hello, world!" ]
        ]
```
